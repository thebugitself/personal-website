"use client";

import About from "@/components/About";
import Hello from "@/components/Hello";
import Navbar from "@/components/Navbar";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { useAos } from "@/lib/useAos";
import { Poppins } from "next/font/google";
import { Urbanist } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const urbanist = Urbanist({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  useAos();
  return (
    <main className="relative">
      <ParticlesBackground />
      <Navbar />
      <Hello />
      {/* <About /> */}
    </main>
  );
}
