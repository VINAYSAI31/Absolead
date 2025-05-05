import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
          <a href="/images/logo.png" className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
  <img src="/images/logo.png" alt="Logo" className="h-20 w-24 object-contain" />
  <span>AbsoLead</span>
</a>

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Features
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              About
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex">
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-4 bg-white shadow-md space-y-3">
          <a 
            href="#features" 
            className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            onClick={toggleMenu}
          >
            Features
          </a>
          <a 
            href="#about" 
            className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            onClick={toggleMenu}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            onClick={toggleMenu}
          >
            Testimonials
          </a>
          <a 
            href="#pricing" 
            className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            onClick={toggleMenu}
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            onClick={toggleMenu}
          >
            Contact
          </a>
          <a 
            href="#contact" 
            className="block px-4 py-2 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};