"use client"
import React from 'react';
import Link from 'next/link';

const Footer = () => {


    
  return (
    <footer className="bg-[#030014] py-6">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Company Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white">Masjid Hidayatullah</h2>
            <p className="text-sm text-gray-400">
            Jangnim, Busan, South Korea           
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-base text-white font-semibold">Koperasi</h3>
              <ul className="mt-2 text-sm space-y-1">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/items" className="text-gray-400 hover:text-white">
                    Daftar Harga
                  </Link>
                </li>
                <li>
                  <Link href="" className="text-gray-400 hover:text-white">
                    Pembayaran
                  </Link>
                </li>
              </ul>
            </div>
           
            <div>
              <h3 className="text-base text-white font-semibold">Follow Us</h3>
              <div className="mt-2 flex space-x-4">
                <a href="https://www.facebook.com/MasjidHidayatullah2016" target="_blank" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.406.595 24 1.325 24H12.82V14.708h-3.1v-3.62h3.1V8.413c0-3.066 1.87-4.74 4.601-4.74 1.31 0 2.437.097 2.764.141v3.204H18.68c-1.487 0-1.775.707-1.775 1.742v2.284h3.548l-.463 3.62h-3.085V24h6.054c.729 0 1.324-.594 1.324-1.324V1.325C24 .595 23.406 0 22.675 0" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/dkm_hidayatullah/" target="_blank" className="text-gray-400 hover:text-white">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"/>                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center text-xs font-serif text-gray-400">
          <p>&copy; {new Date().getFullYear()} DKM Masjid Hidayatullah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

