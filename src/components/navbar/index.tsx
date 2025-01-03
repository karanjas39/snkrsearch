"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DoorOpenIcon, User2Icon, LogOutIcon } from "lucide-react";
import { useIsPathName } from "@/hooks/use-pathname";
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import DashboardLoader from "@/app/loading";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session, status } = useSession();
  const isLandingPage = useIsPathName("/");
  const isSignInPage = useIsPathName("/signin");
  const isDashboardPage = usePathname().includes("/dashboard");

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

  const renderAuthButton = () => {
    if (status === "loading") {
      return (
        <Button disabled variant="ghost">
          <DashboardLoader width={20} />
        </Button>
      );
    }

    if (session) {
      if (isDashboardPage) {
        return (
          <Button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="gap-2"
            size="sm"
          >
            <LogOutIcon className="h-4 w-4" />
            Log Out
          </Button>
        );
      }
      return (
        <Link href="/dashboard/profile">
          <Button className="gap-2" size="sm">
            <User2Icon className="h-4 w-4" />
            Dashboard
          </Button>
        </Link>
      );
    }

    if (isSignInPage) {
      return (
        <Link href="/signup">
          <Button className="gap-2" size="sm">
            <User2Icon className="h-4 w-4" />
            Sign Up
          </Button>
        </Link>
      );
    }

    return (
      <Button onClick={() => signIn()} className="gap-2" size="sm">
        <DoorOpenIcon className="h-4 w-4" />
        Sign In
      </Button>
    );
  };

  return (
    <nav className={navClasses}>
      <Logo color={textColorClass} />
      <div className={cn("flex items-center gap-3", textColorClass)}>
        {renderAuthButton()}
      </div>
    </nav>
  );
}

export default Navbar;
