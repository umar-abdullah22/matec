import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from '@assets/hamburger.svg';
import CrossIcon from '@assets/cross.svg'
import MoonIcon from '@assets/moon.svg';
import SunIcon from '@assets/sun.svg';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  isDarkMode: boolean | undefined;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, isDarkMode, toggleDarkMode }) => {
  return (
    <header className="bg-gray-800 dark:bg-gray-900 text-white px-4 py-3 flex justify-between items-center w-full">
      <Link to="/" className="text-lg font-bold">Matec</Link>
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex">
          <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</Link>
          <Link to="/upload" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Upload Image</Link>
        </div>
        <button onClick={toggleDarkMode} className="flex items-center bg-transparent">
          <img src={isDarkMode ? SunIcon : MoonIcon} alt={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} className="w-6 h-6" />
        </button>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden bg-transparent">
          <img src={isMenuOpen ? CrossIcon : HamburgerIcon} alt={isMenuOpen ? "Close Menu" : "Open Menu"} className="w-8 h-8" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-3 space-y-1">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Home</Link>
          <Link to="/upload" onClick={() => setIsMenuOpen(false)} className="block text-center px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Upload Image</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
