"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);  // State to track scroll position
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 p-4 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#030014] shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and text beside each other */}
        <div className="flex items-center space-x-2 text-white text-xl font-bold">
          {/* Logo beside the text */}
          <Link href="/" passHref>
            <Image 
              src="/masjid.png"
              alt="logo"
              width={45}
              height={45}
              className="object-cover cursor-pointer"
            />
          </Link>
          <Link href="/" passHref className='font-serif font-extrabold'>
            Hidayatullah
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6 text-white font-bold text-sm hover:text-gray-200">
          <Link href="/" className="text-white font-bold text-sm hover:text-gray-200">
            Home
          </Link>
          <Link href="/items" className="text-white font-bold text-sm hover:text-gray-200">
            Daftar Harga
          </Link>
          <Link href="" className="text-white font-bold text-sm hover:text-gray-200">
            Pembayaran
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4 bg-[#030014]">
            <a href="/" className="text-white font-bold hover:text-gray-200">
              Home
            </a>
            <a href="/items" className="text-white font-bold hover:text-gray-200">
              Daftar Harga
            </a>
            <a href="" className="text-white font-bold hover:text-gray-200">
              Pembayaran
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};