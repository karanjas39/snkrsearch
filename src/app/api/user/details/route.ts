import { getUser } from "@/lib/utils";
import { NextResponse } from "next/server";
import prisma from "@/db";

export async function GET() {
  const { user } = await getUser();

  if (!user) {
    return NextResponse.json(
      { error: "You are not authorized to view this page." },
      { status: 401 }
    );
  }

  const userDetails = await prisma.user.findUnique({
    where: {
      id: Number(user.id),
    },
    select: {
      name: true,
      email: true,
      dob: true,
      gender: true,
      verified: true,
      createdAt: true,
    },
  });

  if (!userDetails) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({
    user: userDetails,
  });
}
