"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  // Tentukan apakah header perlu disembunyikan
  const hideHeader = pathname === "/login" || pathname.startsWith("/admin");

  // Jangan render header jika perlu disembunyikan
  if (hideHeader) {
    return null;
  }

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto xl:flex xl:justify-center xl:items-center justify-items-end">
        {/* Desktop Nav*/}
        <div className="hidden xl:flex gap-8">
          <Nav />
        </div>
        {/* Mobile*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
