"use client";

import React, { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import DashboardShortcutMobile from "./dashboard-shortcut-mobile";
import Link from "next/link";
import {
  HistoryIcon,
  Settings2Icon,
  User2Icon,
  UsersIcon,
  BarChart3Icon,
} from "lucide-react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";

interface NavLink {
  name: string;
  link: string;
  icon: React.ReactNode;
  requiresAdmin?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Profile", link: "/dashboard/profile", icon: <User2Icon /> },
  { name: "History", link: "/dashboard/history", icon: <HistoryIcon /> },
  { name: "Settings", link: "/dashboard/settings", icon: <Settings2Icon /> },
  {
    name: "Users",
    link: "/dashboard/users",
    icon: <UsersIcon />,
    requiresAdmin: true,
  },
  {
    name: "Analytics",
    link: "/dashboard/analytics",
    icon: <BarChart3Icon />,
    requiresAdmin: true,
  },
];

function DashboardNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { data: session } = useSession();

  const isAdmin = session?.user?.admin;

  const filteredNavLinks = navLinks.filter(
    (link) => !link.requiresAdmin || (link.requiresAdmin && isAdmin)
  );

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsNavOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <DashboardShortcutMobile
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={isSmallScreen ? { x: -300, opacity: 0 } : false}
            animate={{ x: 0, opacity: 1 }}
            exit={isSmallScreen ? { x: -300, opacity: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute lg:relative z-40 bg-white h-full rounded-l-xl"
          >
            <ScrollArea className="w-56 h-full border-r rounded-l-xl">
              <nav className="p-4 flex flex-col gap-2">
                {filteredNavLinks.map((link, index) => (
                  <Button key={index} variant="outline">
                    <Link
                      href={link.link}
                      className="flex items-center gap-2 w-full"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                      {link.requiresAdmin && (
                        <span className="ml-auto text-xs text-muted-foreground">
                          Admin
                        </span>
                      )}
                    </Link>
                  </Button>
                ))}
              </nav>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>

      {isNavOpen && isSmallScreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsNavOpen(false)}
          className="fixed inset-0 bg-black/20 lg:hidden z-30"
        />
      )}
    </>
  );
}

export default DashboardNavbar;
