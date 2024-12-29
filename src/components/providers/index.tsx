"use client";

import { type ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";

function RootProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <SessionProvider>
        <>
          <Navbar />
          {children}
          <Toaster />
        </>
      </SessionProvider>
    </>
  );
}

export default RootProvider;
