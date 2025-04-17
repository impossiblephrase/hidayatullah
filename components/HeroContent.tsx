"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/components/motion';

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-20 w-full" // Reduce padding for mobile
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>

        {/* Hero title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className='flex flex-col gap-6 mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[800px] w-auto h-auto'>
          <span>
            Mari berbelanja kebutuhan sehari-hari di Koperasi
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-cyan-500 '> Masjid Hidayatullah </span>
          </span>
        </motion.div>

        {/* Hero description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className='text-base sm:text-lg text-white shadow-xl my-5 max-w-[600px]'>
          Dengan berbelanja di Koperasi Masjid Hidayatullah Jangnim, anda secara tidak langsung telah membantu 
          meringankan biaya operasional masjid. Mari rutin berbelanja di Koperasi Masjid Hidayatullah Jangnim,
          Mari bantu makmurkan masjid.
        </motion.p>

        {/* Call to Action Button */}
        <motion.a
          href='/items'
          variants={slideInFromLeft(0.9)}
          className='px-3 py-5 bg-transparent border-2 text-center cursor-pointer border-white text-white font-semibold rounded-lg hover:bg-green-100 hover:text-green-600 transition max-w-[250px]'
        >
          Daftar harga
        </motion.a>
      </div>
    </motion.div>
  )
}

export default HeroContent;
