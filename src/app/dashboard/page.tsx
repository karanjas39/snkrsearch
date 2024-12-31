"use client";

import AuthProvider from "@/components/providers/auth-provider";
import { useSession } from "next-auth/react";

function DashboardPage() {
  const session = useSession();

  return (
    <AuthProvider>
      <div>{JSON.stringify(session)}</div>
    </AuthProvider>
  );
}

export default DashboardPage;
