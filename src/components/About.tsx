import React from "react";
import { Urbanist } from "next/font/google";
import { Poppins } from "next/font/google";
import Image from "next/image";
import img from "../..//public/assets/lain.png";

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

const About = () => {
  return (
    <div className="flex justify-center mx-auto md:mt-52 lg:mt-40 mt-80 sm:mt-96">
      <div className="flex flex-col mx-auto bg-transparent md:w-[1500px] md:h-[550px] items-start gap-4 px-4">
        <h2
          className={`${urbanist.className} xl:text-[180px] text-[100px] text-gray-100 font-bold`}
        >
          Who I Am ?
        </h2>
        <div className="flex flex-col-reverse xl:flex-row justify-center xl:justify-between xl:items-start items-center gap-4 w-full">
          <div
            className={`${poppins.className} text-gray-200 lg:text-[25px] md:text-[20px] text-[16px] xl:w-2/3`}
          >
            {`I'm Akhdan Arif, you might know as my nickname Len. Right now I'm
      undergraduate student from Institut Teknologi Sumatera. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Minus ab enim quasi
      laboriosam itaque ex sed fugit, veritatis ducimus eum non rem alias
      hic, obcaecati quaerat repudiandae cumque nesciunt nostrum!`}
          </div>
          <div className="rounded-full lg:w-[300px] lg:h-[300px] w-36 h-36 bg-white overflow-hidden">
            <Image
              src={img}
              alt="me"
              width={860}
              height={837}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
