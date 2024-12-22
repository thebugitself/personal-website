"use client";

import { motion } from "framer-motion";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="h-full">
      {/* Top Seamless Marquee */}
      <div className="absolute z-1 w-full bg-accent text-primary py-[10px] rotate-[3deg] overflow-hidden xl:mt-[-20px] mt-[-35px] shadow-md">
        <motion.div
          className="flex gap-[43px]"
          animate={{ x: ["-100%", "0%"] }} // Moves left to right seamlessly
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
      </div>

      {/* Main Content */}
      <div className="container mx-auto h-full px-14">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Penetration Tester</span>
            <h1 className="h1 mb-6">
              Uhh um, I&apos;m <br />
              <span className="text-accent">Akhdan</span>
            </h1>
            <p className="max-w-[500px] text-white/80">
              {
                "The more I learn, the more I realize how much I don't know. – Albert Einstein"
              }
            </p>
          </div>
          <div className="order-4 xl:order-none">
            <Stats />
          </div>
        </div>
        <div className="hidden xl:flex xl:mx-auto xl:justify-center xl:items-center">
          <Socials
            containerStyles="flex gap-6"
            iconStyles="w-9 h-9 border-accent rounded-full flex items-center justify-center hover:text-accent text-base"
          />
        </div>
      </div>

      {/* Bottom Seamless Marquee */}
      <div className="absolute z-1 w-full bg-accent text-primary py-[10px] rotate-[-3deg] overflow-hidden xl:mt-[-120px] mt-[-60px] shadow-md">
        <motion.div
          className="flex gap-[43px]"
          animate={{ x: ["0%", "-100%"] }} // Moves right to left seamlessly
          transition={{
            duration: 41, // Duration of one full scroll
            repeat: Infinity, // Infinite loop
            ease: "linear", // Smooth continuous motion
          }}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <h2 key={`bottom-${i}`}>THEBUGITSELF</h2>
          ))}
          {Array.from({ length: 12 }, (_, i) => (
            <h2 key={`bottom-duplicate-${i}`}>THEBUGITSELF</h2>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
