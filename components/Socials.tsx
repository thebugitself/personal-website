"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithubAlt, FaLinkedinIn, FaMedium } from "react-icons/fa";
import { motion } from "framer-motion";

type Social = {
  icon: JSX.Element;
  path: string;
};

type SocialsProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const socials: Social[] = [
  {
    icon: <FaGithubAlt />,
    path: "https://github.com/thebugitself",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://linkedin.com/akhdanarf",
  },
  {
    icon: <FaMedium />,
    path: "https://medium.com/@akhdanarif",
  },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures Framer Motion runs only after hydration
  }, []);

  if (!isClient) return null; // Prevent rendering during SSR

  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <motion.a
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className={iconStyles}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default Socials;
