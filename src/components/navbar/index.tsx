"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { User2Icon } from "lucide-react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 350;
      if (isScrolled !== scrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <nav
      className={cn(
        "px-4 py-2 flex items-center justify-between w-full fixed z-20 transition-all duration-500 ease-in-out",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <Logo color={isScrolled ? "text-black" : "text-white"} />
      <div
        className={cn(
          "flex items-center gap-3 transition-all duration-500 ease-in-out",
          isScrolled ? "text-black" : "text-white"
        )}
      >
        <Link href="/signup">
          <Button>
            <User2Icon /> Account
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
