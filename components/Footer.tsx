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
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.003.246 2.466.415a4.92 4.92 0 0 1 1.675 1.086 4.92 4.92 0 0 1 1.086 1.675c.169.463.359 1.26.415 2.466.058 1.266.07 1.645.07 4.849s-.012 3.584-.07 4.85c-.056 1.206-.246 2.003-.415 2.466a4.902 4.902 0 0 1-1.086 1.675 4.902 4.902 0 0 1-1.675 1.086c-.463.169-1.26.359-2.466.415-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.003-.246-2.466-.415a4.92 4.92 0 0 1-1.675-1.086 4.92 4.92 0 0 1-1.086-1.675c-.169-.463-.359-1.26-.415-2.466C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.056-1.206.246-2.003.415-2.466a4.902 4.902 0 0 1 1.086-1.675 4.902 4.902 0 0 1 1.675-1.086c.463-.169 1.26-.359 2.466-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.053.072 5.775.13 4.64.322 3.678.663a7.07 7.07 0 0 0-2.56 1.659A7.07 7.07 0 0 0 .663 4.88C.322 5.841.13 6.975.072 8.254.013 9.533 0 9.942 0 12c0 2.059.013 2.468.072 3.747.058 1.279.25 2.413.591 3.375a7.07 7.07 0 0 0 1.659 2.56 7.07 7.07 0 0 0 2.56 1.659c.962.341 2.096.533 3.375.591C8.332 23.987 8.741 24 12 24s3.668-.013 4.947-.072c1.279-.058 2.413-.25 3.375-.591a7.07 7.07 0 0 0 2.56-1.659 7.07 7.07 0 0 0 1.659-2.56c.341-.962.533-2.096.591-3.375.059-1.279.072-1.688.072-3.747 0-2.059-.013-2.468-.072-3.747-.058-1.279-.25-2.413-.591-3.375a7.07 7.07 0 0 0-1.659-2.56 7.07 7.07 0 0 0-2.56-1.659c-.962-.341-2.096-.533-3.375-.591C15.668.013 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
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

