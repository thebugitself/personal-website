import { useAos } from "@/lib/useAos";
import React from "react";
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

const Hello = () => {
  useAos();
  return (
    <div className="flex justify-center mx-auto z-10">
      <div className="bg-transparent md:w-[1500px] md:h-[550px] lg:mx-2 flex flex-col lg:mt-36 mt-60 items-start">
        <h2
          className={`${urbanist.className} md:text-[180px] text-[100px] text-gray-100 font-bold`}
        >
          <span data-aos="fade-up" data-aos-duration="500" data-aos-delay="0">
            H
          </span>
          <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
            e
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            l
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
          >
            l
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
        <p
          className={`${poppins.className} text-gray-200 text-[30px] font-light`}
        >
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="700"
          >
            {`Hi, `}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="750"
          >
            {`i'm `}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="800"
          >
            {`Len, `}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="850"
          >
            {`and `}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="900"
            className="underline underline-offset-4"
          >
            {"I "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="950"
          >
            {"am "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1000"
          >
            {"too "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1050"
          >
            {"lazy "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1100"
          >
            {"to "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1150"
            className="underline underline-offset-4"
          >
            {`build`}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1200"
          >
            {` this `}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1250"
            className="underline underline-offset-4"
          >
            {`website.`}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1300"
          >
            {` So `}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1350"
          >
            {`the `}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1400"
          >
            {"purpose "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1450"
          >
            {"of "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1500"
            className="underline underline-offset-4"
          >
            {"this "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1550"
          >
            {' "website" '}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1600"
          >
            {"is "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1650"
            className="underline underline-offset-4"
          >
            {"to "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1700"
          >
            {"show "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1750"
          >
            {"off "}
          </span>
          <span
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="200"
            data-aos-delay="1800"
            className="underline underline-offset-4"
          >
            {"my "}
          </span>
          <span
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
          </span>
        </p>
        <div className="flex justify-end w-full">
          <h2
            className={`${urbanist.className} md:text-[180px] text-[100px] font-bold text-gray-300`}
          >
            <span
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="350"
            >
              Y
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              e
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="450"
            >
              a
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              h
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hello;
