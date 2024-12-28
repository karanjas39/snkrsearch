"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../logo";
import { Button } from "@/components/ui/button";

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
      className={`px-4 py-2 flex items-center justify-between w-full fixed z-10 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-black/40 backdrop-blur-lg"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <Logo />
      <div className="flex items-center gap-3 text-white">
        <Link href="/login">Log In</Link>
        <Link href="/signup">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
