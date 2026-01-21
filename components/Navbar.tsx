
import React, { useState } from 'react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../constants';
import { Menu, X, Phone, MapPin } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', value: Page.Home },
    { name: 'About', value: Page.About },
    { name: 'Products', value: Page.Products },
    { name: 'Reviews', value: Page.Reviews },
    { name: 'Contact', value: Page.Contact },
  ];

  return (
    <nav className="bg-zinc-950/90 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-800">
      <div className="max-w-7-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex-shrink-0 cursor-pointer flex items-center"
            onClick={() => setCurrentPage(Page.Home)}
          >
            <span className="text-2xl font-bold tracking-tighter brand-font italic">
              MAV'S <span className="text-orange-500">MOTORSPORTS</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => {
                    setCurrentPage(link.value);
                    setIsOpen(false);
                  }}
                  className={`${
                    currentPage === link.value
                      ? 'text-orange-500 border-b-2 border-orange-500'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                  } px-3 py-2 text-sm font-medium transition-all duration-200 uppercase tracking-widest brand-font`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center text-zinc-300 hover:text-orange-500 transition-colors">
              <Phone size={18} className="mr-2" />
              <span className="text-sm font-semibold">{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => {
                  setCurrentPage(link.value);
                  setIsOpen(false);
                }}
                className={`${
                  currentPage === link.value
                    ? 'bg-orange-600 text-white'
                    : 'text-zinc-300 hover:bg-zinc-800'
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left uppercase brand-font`}
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="px-4 py-4 border-t border-zinc-800 space-y-2">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center text-zinc-300">
              <Phone size={18} className="mr-3 text-orange-500" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <div className="flex items-center text-zinc-300">
              <MapPin size={18} className="mr-3 text-orange-500" />
              <span className="text-sm">{BUSINESS_INFO.address}</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
