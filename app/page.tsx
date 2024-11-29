import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <main className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Penetration Tester</span>
            <h1 className="h1 mb-6 ">
              Uhh um, I'm <br />
              <span className="text-accent">Len</span>
            </h1>
            <p className="max-w-[500px] text-white/80">
              I really love learning and exploring various topic and wanna be
              master in all of them.
            </p>
          </div>
          <div className="order-4 xl:order-none">
            <Stats />
          </div>
        </div>
        <div className="hidden xl:flex xl:mx-auto xl:justify-center xl:items-center">
          <Socials
            containerStyles="flex gap-6"
            iconStyles="w-9 h-9 border-accent rounded-full flex items-center justify-center hover:text-accent text-base"
          />
        </div>
      </div>
    </main>
  );
}
