import Navbar from "@/components/Navbar";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="flex justify-center mx-auto">
        <div className="bg-transparent flex flex-col lg:mt-48 items-start">
          <h2 className={`${poppins.className} text-[140px] text-gray-100 font-semibold`}>{`{Akhdan`}</h2>
          <p className={`${poppins.className} text-gray-200 text-[30px] font-light`}>I'm Akhdan Arif Prayoga, majoring informatic engineering in Institut Teknologi Sumatera(ITERA) <br />
           currently learning front-end and wannabe a fullstack developer</p>
           <div className="flex justify-end w-full">
            <h2 className={`${poppins.className} text-[140px] font-semibold text-gray-300`}>{`Arif}`}</h2>
           </div>
        </div>
      </div>
    </main>
  );
}
