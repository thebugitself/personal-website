'use client'

import React from 'react'
import { Poppins } from 'next/font/google'
import { useAos } from '@/lib/useAos';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
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
        <nav className={`p-4 bg- ${isFixed ? "lg:fixed lg:left-0 lg:right-0 lg:top-0" : ""} ${isScrolled || isSolid ? "bg-transparent" : "bg-transparent"}`}>
            <div className='container mx-auto flex justify-between items-center'>
                <div data-aos="fade-down" data-aos-duration="700" data-aos-delay="1400" className={`${poppins.className} text-white text-[18px]`}>
                    thebugitself
                </div>
                <div className='space-x-4'>
                    <a data-aos="fade-down" data-aos-duration="700" data-aos-delay="1550" href="#about" className={`${poppins.className}text-white hover:text-gray-300`}>About,</a>
                    <a data-aos="fade-down" data-aos-duration="700" data-aos-delay="1700" href="#project" className={`${poppins.className}text-white hover:text-gray-300`}>Project,</a>
                    <a data-aos="fade-down" data-aos-duration="700" data-aos-delay="1850" href="#contact" className={`${poppins.className}text-white hover:text-gray-300`}>Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar