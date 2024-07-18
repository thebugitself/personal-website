"use client";

import About from "@/components/About";
import Hello from "@/components/Hello";
import Navbar from "@/components/Navbar";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { useAos } from "@/lib/useAos";

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
