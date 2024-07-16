"use client"

import Navbar from "@/components/Navbar"
import { ParticlesBackground } from "@/components/ParticlesBackground"
import { useAos } from "@/lib/useAos"
import { Poppins } from "next/font/google"
const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
})

export default function Home() {
    useAos()
    return (
        <main className="relative">
            <ParticlesBackground />
            <Navbar />
            <div className="flex justify-center mx-auto z-10">
                <div className="bg-transparent lg:w-[1500px] lg:h-[550px] lg:mx-2 flex flex-col lg:mt-48 items-start">
                    <h2
                        data-aos="fade-right"
                        data-aos-duration="700"
                        className={`${poppins.className} text-[140px] text-gray-100 font-semibold`}
                    >{`{Akhdan`}</h2>
                    <p className={`${poppins.className} text-gray-200 text-[30px] font-light`}>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="500" data-aos-delay="600">
                            I'm Akhdan Arif Prayoga, majoring informatic engineering in Institut Teknologi
                            Sumatera(ITERA),
                        </span>
                        <br />
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="500" data-aos-delay="1000">
                            currently learning front-end for fun but still idk what i will be focusing on lol
                        </span>
                    </p>
                    <div className="flex justify-end w-full">
                        <h2
                            data-aos="fade-left"
                            data-aos-duration="700"
                            className={`${poppins.className} text-[140px] font-semibold text-gray-300`}
                        >{`Arif}`}</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}
