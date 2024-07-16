"use client"

import Navbar from "@/components/Navbar"
import { ParticlesBackground } from "@/components/ParticlesBackground"
import { useAos } from "@/lib/useAos"
import { Poppins } from "next/font/google"
import { Urbanist } from "next/font/google"

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
})

const urbanist = Urbanist({
    weight: "600",
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
                        className={`${urbanist.className} text-[140px] text-gray-100 font-semibold`}
                    >{`{Akhdan`}</h2>
                    <p className={`${poppins.className} text-gray-200 text-[30px] font-light`}>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="600">
                          {`I'm `}
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="650">
                          {`currently `}
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="700">
                          {`learning `}   
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="750">
                          {`front`}    
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="800">
                          {'-end '}   
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="850">
                          {'for '}    
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="900">
                          {'fun '}   
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="950">
                          {'but '}    
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="1000">
                          {'still '}
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="1050">
                          {`don't ` }    
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="1100">
                          {`know `} 
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="1150">
                          {`what `}
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="1200">
                          {`I `}
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="1250">
                          {`will `}
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="1300">
                          {`be `}
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="1350">
                          {'focusing '}
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="1400">
                          {'on '}
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="1450">
                          {'lol'}
                        </span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="200" data-aos-delay="1500">
                          {'.'}
                        </span>
                    </p>
                    <div className="flex justify-end w-full">
                        <h2
                            data-aos="fade-left"
                            data-aos-duration="700"
                            className={`${urbanist.className} text-[140px] font-semibold text-gray-300`}
                        >{`Arif}`}</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}
