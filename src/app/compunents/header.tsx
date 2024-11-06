"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  
  if (!isMounted) return null;

  return (
    <header className="bg-gray-800 text-white shadow-lg p-4 flex flex-col animate-fadeInTop">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <div className="relative">
            <img src="logo.png" alt="logo" className="rounded-full border-2 border-teal-500 h-36 w-36 shadow-none mt-[-6px] " />
          </div>
          <h1 className="text-2xl font-bold ml-5 text-white font-serif  ">MY PORTFOLIO</h1>
        </div>
        
        <button onClick={toggleMenu} className="bg-transparent border-none text-white cursor-pointer flex z-10 lg:hidden md:hidden">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="mobile-menu mt-2 flex flex-col w-full bg-gray-800 rounded-lg py-2 border-2 border-green-50">
          <ul className="list-none m-0 p-0">
            <li><Link href="/" className="block py-3 px-4 text-white font-bold text-center hover:bg-gray-700 hover:text-teal-500 ">Home</Link></li>
            <li><Link href="/about" className="block py-3 px-4 text-white font-bold text-center hover:bg-gray-700 hover:text-teal-500">About</Link></li>
            <li><Link href="/project" className="block py-3 px-4 text-white font-bold text-center hover:bg-gray-700 hover:text-teal-500">Projects</Link></li>
            <li><Link href="/contact" className="block py-3 px-4 text-white font-bold text-center hover:bg-gray-700 hover:text-teal-500">Contact</Link></li>
          </ul>
        </div>
      )}
      
      <nav className="desktop-nav  justify-center text-xl font-bold mb-12 hidden md:block ml-[13cm] -mt-20">
    
        <a href="/" className="mx-5 text-white font-bold hover:text-teal-500 ">Home</a>
        <Link href="/about" className="mx-5 text-white font-bold hover:text-teal-500">About</Link>
        <Link href="/project" className="mx-5 text-white font-bold hover:text-teal-500">Projects</Link>
        <Link href="/contact" className="mx-5 text-white font-bold hover:text-teal-500">Contact</Link>
      </nav>
    </header>
  );
}
