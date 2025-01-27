'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

import { images } from '@/lib/images';
import { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';

interface ImageData {
  src: StaticImageData; // Sesuaikan tipe ini
  alt: string;
}

const Highlight: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<null | any>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Delay before showing the Swiper
  useState(() => {
    const timeout = setTimeout(() => setIsVisible(true), 1000); // Delay 1 second
    return () => clearTimeout(timeout);
  });

  return (
    <div className='flex flex-col items-center justify-center mx-2'>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl w-full"
          >
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              autoplay={{
                delay: 2000, // Auto scroll every 3 seconds
                disableOnInteraction: false,
              }}
              thumbs={{
                swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs, Autoplay]}
              className="h-96 w-full rounded-xl text-accent"
            >
              {images.map((image: ImageData, index: number) => (
                <SwiperSlide key={index}>
                  <div className="flex h-full w-full items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="h-full w-full"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="block h-full w-full object-cover"
                      />
                    </motion.div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnail */}
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={12}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="thumbs mt-3 h-32 w-full rounded-lg"
            >
              {images.map((image: ImageData, index: number) => (
                <SwiperSlide key={index}>
                  <button className="flex h-full w-full items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 0.9 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="h-full w-full"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="block h-full w-full object-cover rounded-xl"
                      />
                    </motion.div>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Highlight;
