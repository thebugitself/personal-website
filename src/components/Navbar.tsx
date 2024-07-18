"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { useAos } from "@/lib/useAos";
import Link from "next/link";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Navbar = ({ isSolid = false, isFixed = false }) => {
  useAos();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`p-4 bg- ${
        isFixed ? "lg:fixed lg:left-0 lg:right-0 lg:top-0" : ""
      } ${isScrolled || isSolid ? "bg-transparent" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div
          data-aos="fade-down"
          data-aos-duration="700"
          data-aos-delay="1500"
          className={`${poppins.className} text-white lg:text-[25px] md:text-[20px] text-[16px]`}
        >
          Len&apos;s personal site
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-3 lg:text-[25px] md:text-[20px] text-[16px]">
          <Link
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="1800"
            href="/"
            className={`${poppins.className}text-white hover:text-gray-300`}
          >
            Home,
          </Link>
          <Link
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="1950"
            href="https://github.com/thebugitself"
            target="_blank"
            className={`${poppins.className}text-white hover:text-gray-300`}
          >
            Github,
          </Link>
          <Link
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="2100"
            target="_blank"
            href="https://medium.com/@anophylen"
            className={`${poppins.className}text-white hover:text-gray-300`}
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
