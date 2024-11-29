"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.6, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/hero.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="none"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Define arrow marker */}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="6"
              markerHeight="6"
              refX="0"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L6,3 Z" fill="#e8e337" />
            </marker>
          </defs>

          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#e8e337"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{
              strokeDasharray: "0 1500", // Start hidden
              strokeDashoffset: 1500, // Fully hidden
            }}
            animate={{
              strokeDasharray: ["20 30", "60 90", "120 150"], // Arrow spacing variations
              strokeDashoffset: [1500, 0, -1500], // Rolling effect
              rotate: [0, 180, 0], // Back and forth rotation
            }}
            transition={{
              duration: 20, // Slow and smooth animation
              ease: "easeInOut", // Smooth transitions
              repeat: Infinity, // Infinite looping
              repeatType: "reverse", // Reverse direction
            }}
            style={{
              markerStart: "url(#arrowhead)", // Attach arrows to the start of dashes
              markerMid: "url(#arrowhead)", // Attach arrows to the middle
              markerEnd: "url(#arrowhead)", // Attach arrows to the end
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
