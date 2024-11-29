import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8  xl:py-12 text-white">
      <div className="container mx-auto xl:flex xl:justify-center xl:items-center justify-items-end">
        {/* Desktop Nav*/}
        <div className="hidden xl:flex gap-8">
          <Nav />
        </div>
        {/* Mobile*/}
        <div className="xl:hidden ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
