'use client';

import { useState, useEffect } from 'react';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
const logo = '/ShoorauiLogo.svg';

interface NavbarProps {
  onSearch?: (query: string) => void;
  searchQuery: string;
}

export default function Navbar({ onSearch, searchQuery }: NavbarProps) {
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [selectedLang] = useState('TS');
  const [selectedStyle] = useState('CSS');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#030712] h-20 flex items-center">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg  flex items-center justify-center -ml-30">
            <img src={logo} alt="Shoora UI" className="w-5 h-5" />
          </div>
          <span className="text-white font-bold text-xl ">Shoora UI</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Search Bar */}
        <div className="relative flex-1 max-w-xl mx-8">
          <div className={`flex items-center bg-white/5 border rounded-md transition-all duration-200 ${isSearchFocused ? 'border-white/40' : 'border-white/10'}`}>
            <div className="relative flex-1 max-w-2xl">
              <input
                type="text"
                value={localQuery}
                onChange={(e) => {
                  const value = e.target.value;
                  setLocalQuery(value);
                  onSearch?.(value);
                }}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Search components..."
                className="w-full bg-transparent border-0 text-white placeholder-gray-400 px-3 py-2 focus:ring-0 focus:outline-none text-sm"
              />
            </div>
            <FiSearch className="mr-3 text-gray-400" size={16} />
          </div>
        </div>

          {/* Language and Style Indicators */}
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="px-2 py-1 bg-white/5 rounded">{selectedLang}</span>
            <span className="px-2 py-1 bg-white/5 rounded">{selectedStyle}</span>
          </div>

          {/* GitHub Button */}
          <a
            href="https://github.com/cybershoora/shoora-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-sm text-white rounded-md px-4 py-2 hover:bg-white/5 transition-colors"
          >
            <FaGithub size={16} className="flex-shrink-0" />
            <span>Support on GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
