import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getUser() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  return session;
}
