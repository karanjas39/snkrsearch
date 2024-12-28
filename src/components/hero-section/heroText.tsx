"use client";
import { Anton } from "next/font/google";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const font = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

function HeroText() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 sm:w-1/2  text-white z-20">
      <motion.h1
        className={cn("text-5xl sm:text-6xl font-bold", font.className)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Your Sneaker Search Engine
      </motion.h1>
      <motion.p
        className="text-sm sm:text-base mt-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Search and Compare your Sneakers over 10+ Platforms
      </motion.p>
    </div>
  );
}

export default HeroText;
