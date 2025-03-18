"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Article', href: '#' },
  { name: 'Pages', href: '#' },
  { name: 'Faq', href: '#' }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="w-full z-50">
      <header className="container mx-auto px-5 flex justify-between items-center relative">
        {/* Logo */}
        <div>
          <img
            src="https://discordbanners.vercel.app/static/img/logo.svg"
            alt="logo"
            className="h-10"
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navigation */}
        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out p-6 flex flex-col gap-y-6 md:static md:w-auto md:shadow-none md:bg-transparent md:flex-row md:items-center md:gap-x-9 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <X size={30} />
          </button>

          <ul className="flex flex-col md:flex-row gap-y-4 md:gap-x-5 font-semibold text-lg md:text-base">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <a href={link.href} className="block px-4 py-2 hover:text-blue-500 transition">
                  {link.name}
                </a>
                  <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">/</span>
              </li>
            ))}
          </ul>

          {/* Sign In Button */}
          <button className="border-2 border-blue-500 px-6 py-3 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 w-full md:w-auto">
            Sign In
          </button>
        </nav>
      </header>
    </section>
  );
};

export default Header;
