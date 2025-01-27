"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const hideHeader =
    pathname === "/login" ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/blog/");

  if (hideHeader) {
    return null;
  }

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto">
        {/* Desktop Nav*/}
        <div className="hidden xl:flex gap-8 xl:justify-center xl:items-center">
          <Nav />
        </div>
        {/* Mobile*/}
        <div className="xl:hidden flex justify-end items-end ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
