'use client'
import React, { useState } from 'react';
import Link from 'next/link';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <div className="flex items-center space-x-2.5">
          <img
            src="/imageLogo.svg"
            alt="logo"
            className="w-[40px] h-[40px]"
          />
          <h1 className="text-xl font-bold">
            <span className="text-indigo-600">Talk</span> business
          </h1>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <nav className={`flex-col md:flex-row md:flex items-center space-y-4 md:space-y-0 md:space-x-4 ${isOpen ? 'block' : 'hidden md:flex'}`}>
          <Link className="hover:text-gray-500 transition-colors" href="/">
            Home
          </Link>
          <Link className="hover:text-gray-500 transition-colors" href="/about">
            About
          </Link>
          <Link className="hover:text-gray-500 transition-colors" href="/*">
            Services
          </Link>
          <Link className="hover:text-gray-500 transition-colors" href="/*">
            Systems
          </Link>
          <button className="btn btn-outline btn-secondary">
            Contact us
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
