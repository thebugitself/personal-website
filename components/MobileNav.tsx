"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import Socials from "./Socials";

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

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-between items-center">
        <CiMenuFries className="text-[32px] text-accent"></CiMenuFries>
      </SheetTrigger>
      <SheetContent className="flex flex-col h-full">
        <nav className="flex flex-col justify-between h-full w-full">
          {/* Links */}
          <div className="flex flex-col justify-center items-start gap-8 mt-32">
            {links.map((link, index) => {
              return (
                <motion.div
                  key={index}
                  whileTap={{ scale: 0.95 }} // Shrink slightly on tap
                  whileHover={{ scale: 1.05 }} // Enlarge slightly on hover
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="relative"
                >
                  <Link
                    href={link.path}
                    className={`${
                      link.path === pathname &&
                      "text-accent border-l-2 border-accent px-2"
                    } text-xl capitalize hover:text-accent transition-all`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Socials at the Bottom */}
          <div className="flex justify-center items-center mt-auto">
            <Socials
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border-accent rounded-full flex items-center justify-center hover:text-accent text-base"
            />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
