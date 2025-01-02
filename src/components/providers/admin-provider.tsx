"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import DashboardLoader from "@/app/loading";

interface AdminProviderProps {
  children: React.ReactNode;
}

const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/");
      return;
    }

    const extendedSession = session;

    if (!extendedSession.user?.admin && pathname?.startsWith("/dashboard")) {
      router.push("/");
    }
  }, [session, status, router, pathname]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <DashboardLoader width={50} />
      </div>
    );
  }

  if (pathname?.startsWith("/dashboard")) {
    const extendedSession = session;
    if (!extendedSession?.user?.admin) {
      return null;
    }
  }

  return <>{children}</>;
};

export default AdminProvider;
