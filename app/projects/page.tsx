'use client';

import Highlight from "@/components/ProjectComponents/Highlight";
import Gallery from "@/components/ProjectComponents/Gallery";
import TechStack from "@/components/ProjectComponents/TechStack";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const marqueeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 0.5, ease: "easeInOut" },
  },
};

export default function Projects(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100); // Delay 1 detik
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-full">
      {/* Top Marquee Section */}
      <motion.div
        className="absolute z-1 w-full bg-accent text-primary py-[10px] rotate-[3deg] overflow-hidden xl:mt-[-20px] mt-[-35px] shadow-md"
        variants={marqueeVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div
          className="flex gap-[43px]"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            duration: 41, // Duration of one full scroll
            repeat: Infinity, // Infinite loop
            ease: "linear", // Smooth continuous motion
          }}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <h2 key={`top-${i}`}>THEBUGITSELF</h2>
          ))}
          {Array.from({ length: 12 }, (_, i) => (
            <h2 key={`top-duplicate-${i}`}>THEBUGITSELF</h2>
          ))}
        </motion.div>
      </motion.div>

      {/* Main Content Section */}
      <section className="min-h-screen py-12 flex flex-col">
        <div className="mb-8">
          {/* <h1 className="text-4xl font-bold text-hover text-center">
            My Projects
          </h1> */}
        </div>
        {isVisible && (
          <>
            <Highlight />
            <TechStack />
            <Gallery />
          </>
        )}
      </section>
    </div>
  );
}
