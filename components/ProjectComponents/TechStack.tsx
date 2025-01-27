"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Skills } from "@/lib/dataSkills";

const SkillsCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 1000); // Delay 1 detik sebelum komponen muncul
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-full"
        >
          {/* Skills Section */}
          <div className="container mx-auto">
            <div className="text-center mb-12">
              {/* Uncomment jika ingin menambahkan judul dan deskripsi */}
              {/* <h1 className="text-4xl font-bold text-accent">Technical Proficiency</h1>
              <p className="text-lg text-white/80">
                Showcasing my proficiency in various languages, frameworks, and tools.
              </p> */}
            </div>
            <div className="w-4/5 m-auto overflow-hidden">
              <Marquee speed={100} gradient={false}>
                <div className="flex space-x-16">
                  {Skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex flex-col items-center space-y-4"
                    >
                      <div className="text-accent text-7xl p-6 rounded-lg bg-transparent">
                        <skill.icon />
                      </div>
                      <div className="text-white bg-white/10 p-3 rounded-xl text-center font-medium">
                        {skill.name}
                      </div>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default SkillsCarousel;
