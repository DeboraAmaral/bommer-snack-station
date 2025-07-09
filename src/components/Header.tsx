
import React, { useState } from 'react';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-ecolive-dark-green font-bold text-xl md:text-2xl">
                Eco<span className="text-ecolive-light-green">Live</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="/" className="text-ecolive-dark-green font-medium hover:text-ecolive-light-green transition-colors">Home</a>
            <a href="/shop" className="text-ecolive-dark-green font-medium hover:text-ecolive-light-green transition-colors">Shop</a>
            <a href="/categories" className="text-ecolive-dark-green font-medium hover:text-ecolive-light-green transition-colors">Categories</a>
            <a href="/about" className="text-ecolive-dark-green font-medium hover:text-ecolive-light-green transition-colors">About</a>
            <a href="/contact" className="text-ecolive-dark-green font-medium hover:text-ecolive-light-green transition-colors">Contact</a>
          </nav>

          {/* Desktop Shop Now Button */}
          <div className="hidden md:block">
            <Button className="bg-ecolive-light-green hover:bg-ecolive-light-green/90 text-white px-6 py-2">
              Shop Now
            </Button>
          </div>

          {/* Right Icons - Always visible */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Search Button - Hidden on small screens */}
            <button className="hidden sm:flex p-2 text-ecolive-dark-green hover:text-ecolive-light-green transition-colors">
              <Search size={18} className="md:w-5 md:h-5" />
            </button>
            
            {/* User Button */}
            <button className="p-2 text-ecolive-dark-green hover:text-ecolive-light-green transition-colors">
              <User size={18} className="md:w-5 md:h-5" />
            </button>
            
            {/* Shopping Cart Button */}
            <button className="p-2 text-ecolive-dark-green hover:text-ecolive-light-green transition-colors relative">
              <ShoppingCart size={18} className="md:w-5 md:h-5" />
              <span className="absolute -top-1 -right-1 bg-ecolive-light-green text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-ecolive-dark-green hover:text-ecolive-light-green transition-colors ml-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b">
                <span className="text-ecolive-dark-green font-bold text-xl">
                  Eco<span className="text-ecolive-light-green">Live</span>
                </span>
                <button 
                  onClick={closeMobileMenu} 
                  className="p-2 text-ecolive-dark-green hover:text-ecolive-light-green transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex flex-col py-6 px-4 space-y-4 flex-1">
                <a 
                  href="/" 
                  className="text-ecolive-dark-green text-lg font-medium hover:text-ecolive-light-green transition-colors py-3 border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
                <a 
                  href="/shop" 
                  className="text-ecolive-dark-green text-lg font-medium hover:text-ecolive-light-green transition-colors py-3 border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  Shop
                </a>
                <a 
                  href="/categories" 
                  className="text-ecolive-dark-green text-lg font-medium hover:text-ecolive-light-green transition-colors py-3 border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  Categories
                </a>
                <a 
                  href="/about" 
                  className="text-ecolive-dark-green text-lg font-medium hover:text-ecolive-light-green transition-colors py-3 border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  About
                </a>
                <a 
                  href="/contact" 
                  className="text-ecolive-dark-green text-lg font-medium hover:text-ecolive-light-green transition-colors py-3 border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>
                
                {/* Search Option */}
                <button 
                  className="flex items-center space-x-3 text-ecolive-dark-green text-lg font-medium hover:text-ecolive-light-green transition-colors py-3 border-b border-gray-100 text-left"
                  onClick={closeMobileMenu}
                >
                  <Search size={20} />
                  <span>Search</span>
                </button>
              </div>

              {/* Shop Now Button */}
              <div className="p-4 border-t">
                <Button 
                  className="w-full bg-ecolive-light-green hover:bg-ecolive-light-green/90 text-white py-3 text-lg font-medium"
                  onClick={closeMobileMenu}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
