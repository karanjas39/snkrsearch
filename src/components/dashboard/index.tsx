"use client";

import React, { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import DashboardNavbar from "./dashboard-navbar";
import DashboardCanvas from "./dashboard-canvas";
import DashboardShortcutMobile from "./dashboard-shortcut-mobile";

function Dashboard() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
    <div className="h-[calc(100vh-85px)] mt-4">
      <Card className="h-full flex flex-col lg:flex-row sm:w-[98%] w-[95%] mx-auto relative">
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
              <ScrollArea className="w-64 h-full border-r rounded-l-xl">
                <DashboardNavbar />
              </ScrollArea>
            </motion.div>
          )}
        </AnimatePresence>

        <ScrollArea className="flex-1 h-full">
          <DashboardCanvas />
        </ScrollArea>

        {isNavOpen && isSmallScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsNavOpen(false)}
            className="fixed inset-0 bg-black/20 lg:hidden z-30"
          />
        )}
      </Card>
    </div>
  );
}

export default Dashboard;
