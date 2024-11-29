"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "terminal",
    path: "/terminal",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <motion.div
            key={index}
            whileTap={{ scale: 0.95 }} // Button shrinks slightly when clicked
            whileHover={{ scale: 1.05 }} // Button grows slightly on hover
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative"
          >
            <Link
              href={link.path}
              className={`${
                link.path === pathname &&
                "text-accent font-bold border-l-2 border-accent px-2"
              } capitalize font-medium hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
};

export default Nav;
