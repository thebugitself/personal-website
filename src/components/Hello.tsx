import { useAos } from "@/lib/useAos";
import React from "react";
import { Poppins } from "next/font/google";
import { Urbanist } from "next/font/google";
import Link from "next/link"

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

const Hello = () => {
  useAos();
  return (
    <div className="flex justify-center mx-auto z-10">
      <div className="bg-transparent lg:w-[1500px] md:h-[550px] lg:mx-2 flex flex-col md:mt-56 lg:mt-48 xl:mt-36 mt-60 px-4 items-start">
        <h2
          className={`${urbanist.className} xl:text-[180px] md:text-[100px] text-[50px] text-gray-100 font-bold`}
        >
          <span data-aos="fade-up" data-aos-duration="500" data-aos-delay="0">
            1
          </span>
          <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
            0
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            0
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
          >
            %
          </span>
          {/* <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            a
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            n
          </span> */}
        </h2>
        <Link
          data-aos="fade-right"
          data-aos-duration="200"
          data-aos-delay="1200"
          href="https://youtu.be/fC7oUOUEEi4?si=NhQLOXLwTUfyD33r"
          target="_blank"
          className="text-gray-200 lg-text-[25px] md:text-[20px] text-[14px]"
          >click me
        </Link>
        <p
          className={`${poppins.className} text-gray-200 lg:text-[25px] md:text-[20px] text-[14px]`}
        >
          {/* <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="700"
          >
            {`I'm `}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="750"
          >
            {`an `}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="800"
          >
            {`Informatic `}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="850"
          >
            {`Engineering `}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="900"
            className="underline underline-offset-4"
          >
            {"student "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="950"
          >
            {"at "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1000"
          >
            {"Institut "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1050"
          >
            {"Teknologi "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1100"
          >
            {"Sumatera, "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1150"
          >
            {`passionate`}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1200"
          >
            {` about `}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1250"
            className="underline underline-offset-4"
          >
            {`cybersecurity `}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1300"
          >
            {`and `}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1350"
            className="underline underline-offset-4"
          >
            {`software `}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1400"
            className="underline underline-offset-4"
          >
            {"development."}
          </span>
          <br />
          <br /> */}
          {/*<span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1450"
          >
            {"There's "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1500"
          >
            {"nothing "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1550"
          >
            {"here, "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1600"
          >
            {"please "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1650"
          >
            {"come "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1700"
          >
            {"back "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1750"
          >
            {"later, "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1800"
            className="underline underline-offset-4"
          >
            {"h3h3."}
          </span>*/}
          {/*<span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1850"
          >
            {"projects "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1900"
          >
            {"but "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1950"
            className="underline underline-offset-4"
          >
            {"i "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="2000"
          >
            {"don't "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="2050"
            className="underline underline-offset-4"
          >
            {"have "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="2100"
          >
            {"any "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="2150"
            className="underline underline-offset-4"
          >
            {"projects "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="2200"
          >
            {"to "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="2250"
            className="underline underline-offset-4"
          >
            {"show "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="2300"
          >
            {"off."}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="2350"
          >
            {" Please"}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="2400"
          >
            {" Come"}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="2450"
          >
            {" back"}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="2500"
          >
            {" later."}
          </span> */}
        </p>
        <div className="flex justify-end w-full">
          <h2
            className={`${urbanist.className} xl:text-[180px] md:text-[100px] text-[50px] font-bold text-gray-300`}
          >
            <span
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="350"
            >
              No
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              S
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="450"
            >
              ca
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              m
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hello;
