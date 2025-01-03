"use client";

import { type ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import { Provider } from "react-redux";
import { store } from "@/store/index";

function RootProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <SessionProvider>
        <Provider store={store}>
          <>
            <Navbar />
            {children}
            <Toaster />
          </>
        </Provider>
      </SessionProvider>
    </>
  );
}

export default RootProvider;
