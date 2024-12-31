import { NextResponse } from "next/server";
import prisma from "@/db";
import { z_signup } from "@/types";
import { hashSync } from "bcrypt-ts";
import { getMissingFields } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { success, data } = z_signup.safeParse(body);

    if (!success) {
      return NextResponse.json(
        { error: getMissingFields(z_signup, body) },
        { status: 400 }
      );
    }

    if (data.confirmedPassword !== data.password) {
      return NextResponse.json(
        { error: "Password does not match." },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (user && user.verified) {
      return NextResponse.json(
        { error: "Unable to register user with this email." },
        { status: 401 }
      );
    }

    const hashedPassword = hashSync(data.password, 10);

    await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: hashedPassword,
        dob: data.dob,
        gender: data.gender,
      },
    });

    return NextResponse.json(
      {
        message: "You have been registered successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { error: err.message || "Internal server error." },
      { status: 500 }
    );
  }
}
