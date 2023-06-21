"use client"
import React from 'react';
import { usePathname } from 'next/navigation'; // next/navigation'ı içe aktarıyoruz

export const Navbar = () => {
  const router = usePathname(); // useNav hook'unu kullanıyoruz

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-24 w-24"
                src="/vercel.svg"
                alt="Logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${router === '/' ? 'bg-gray-700 text-white' : ''}`}
                >
                  Anasayfa
                </a>
                <a
                  href="/pages/about"
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${router === '/pages/about' ? 'bg-gray-700 text-white' : ''}`}
                >
                  Hakkımızda
                </a>
                <a
                  href="/pages/contact"
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${router === '/pages/contact' ? 'bg-gray-700 text-white' : ''}`}
                >
                  İletişim
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
