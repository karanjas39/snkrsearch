/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { ZodType } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMissingFields<T extends ZodType<any, any>>(
  schema: T,
  data: Record<string, any>
): string {
  const parsed = schema.safeParse(data);

  if (parsed.success) {
    return "";
  }

  const missingFields = parsed.error.errors
    .filter((error) => error.path.length > 0)
    .map((error) => error.path.join("."))
    .join(", ");

  return `Required fields: ${missingFields}`;
}

export async function getUser() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  return session;
}
