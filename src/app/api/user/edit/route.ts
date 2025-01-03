import { getUser } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";
import { z_editProfile } from "@/types";

export async function POST(req: NextRequest) {
  const { user } = await getUser();
  const body = await req.json();

  const { success, data } = z_editProfile.safeParse(body);

  if (!success) {
    return NextResponse.json(
      { error: "Invalid data provided" },
      { status: 400 }
    );
  }

  if (!user) {
    return NextResponse.json(
      { error: "You are not authorized to view this page." },
      { status: 401 }
    );
  }

  await prisma.user.update({
    where: {
      id: Number(user.id),
    },
    data: {
      name: data.name,
      dob: data.dob,
      email: data.email,
      gender: data.gender,
    },
  });

  return NextResponse.json(
    {
      message: "Profile updated successfully",
    },
    { status: 200 }
  );
}
