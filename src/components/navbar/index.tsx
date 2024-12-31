"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DoorOpenIcon, User2Icon, LogOutIcon } from "lucide-react";
import { useIsPathName } from "@/hooks/use-pathname";
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session } = useSession();
  const isLandingPage = useIsPathName("/");
  const isSignInPage = useIsPathName("/signin");
  const isDashboardPage = useIsPathName("/dashboard");

  useEffect(() => {
    if (!isLandingPage) return;

    const handleScroll = () => {
      const scrolled = window.scrollY > 350;
      if (isScrolled !== scrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled, isLandingPage]);

  const navClasses = cn(
    "px-4 py-2 flex items-center justify-between w-full z-20",
    {
      "transition-all duration-500 ease-in-out": isLandingPage,
      fixed: isLandingPage,
      static: !isLandingPage,
      "bg-white shadow-md": isLandingPage && isScrolled,
      "bg-transparent": isLandingPage && !isScrolled,
    }
  );

  const textColorClass = isLandingPage
    ? isScrolled
      ? "text-black"
      : "text-white"
    : "text-black";

  return (
    <nav className={navClasses}>
      <Logo color={textColorClass} />
      <div className={cn("flex items-center gap-3", textColorClass)}>
        {session ? (
          isDashboardPage ? (
            <Button onClick={() => signOut({ callbackUrl: "/" })}>
              <LogOutIcon /> Log Out
            </Button>
          ) : (
            <Link href="/dashboard">
              <Button>
                <User2Icon /> Dashboard
              </Button>
            </Link>
          )
        ) : isSignInPage ? (
          <Link href="/signup">
            <Button>
              <User2Icon /> Sign Up
            </Button>
          </Link>
        ) : (
          <Link href="/signin">
            <Button onClick={() => signIn()}>
              <DoorOpenIcon /> Sign In
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
