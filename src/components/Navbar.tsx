"use client";

import React from "react";
import { Poppins } from "next/font/google";
import { useAos } from "@/lib/useAos";

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
          className={`${poppins.className} text-white text-[25px]`}
        >
          thebugitself&apos;s personal website
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row md:space-x-3 text-[25px]">
          <a
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="1800"
            href="/personal-website"
            className={`${poppins.className}text-white hover:text-gray-300`}
          >
            Home,
          </a>
          <a
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="1950"
            href="https://github.com/thebugitself"
            className={`${poppins.className}text-white hover:text-gray-300`}
          >
            Github,
          </a>
          <a
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="2100"
            href="https://medium.com/@anophylen"
            className={`${poppins.className}text-white hover:text-gray-300`}
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
