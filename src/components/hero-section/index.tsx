"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FlipWords } from "../ui/flip-words";

function HeroSection() {
  return (
    <section className="flex-1 relative">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center flex flex-col gap-2 items-center z-10"
        >
          <div className="sm:text-6xl text-4xl font-extrabold">
            <span className="text-primary">SnkrSearch</span> is sleek, you know.
          </div>
          <div className="sm:text-2xl text-base">
            And this, is where you{" "}
            <FlipWords
              words={["find", "compare", "select"]}
              className="font-bold text-primary"
            />
            sneakers.
          </div>
          <Button className="max-w-max mt-2 rounded-full" size="lg">
            Start Searching
          </Button>
        </motion.div>
      </AuroraBackground>
    </section>
  );
}

export default HeroSection;
