
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const Logo = () => (
    <Link to="/" className="text-3xl font-display font-bold text-white z-50">
      Folvix
    </Link>
  );

  return (
    <header className="sticky top-0 z-40 bg-midnight/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-white transition-colors duration-300 hover:text-plasma-violet ${
                location.pathname === link.path ? 'text-plasma-violet' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
           <Link to="/contact" className="bg-plasma-violet text-white font-bold py-2 px-6 rounded-lg hover:bg-plasma-violet-dark transition-all duration-300 shadow-lg shadow-plasma-violet/20 hover:shadow-plasma-violet/40">
            Contact Us
           </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none z-50">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-midnight flex flex-col items-center justify-center space-y-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-medium text-white transition-colors duration-300 hover:text-plasma-violet ${
                location.pathname === link.path ? 'text-plasma-violet' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
           <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4 bg-plasma-violet text-white font-bold py-3 px-8 rounded-lg hover:bg-plasma-violet-dark transition-all duration-300 shadow-lg shadow-plasma-violet/20 hover:shadow-plasma-violet/40">
            Contact Us
           </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
