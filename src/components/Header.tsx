
import React, { useState } from 'react';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
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
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center border-b">
            <span className="text-ecolive-dark-green font-bold text-xl">
              Eco<span className="text-ecolive-light-green">Live</span>
            </span>
            <button 
              onClick={toggleMobileMenu} 
              className="p-2 text-ecolive-dark-green hover:text-ecolive-light-green transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="container mx-auto px-4 flex flex-col py-8 space-y-6">
            <a 
              href="/" 
              className="text-ecolive-dark-green text-lg font-medium hover:text-ecolive-light-green transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Home
            </a>
            <a 
              href="/shop" 
              className="text-ecolive-dark-green text-lg font-medium hover:text-ecolive-light-green transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Shop
            </a>
            <a 
              href="/categories" 
              className="text-ecolive-dark-green text-lg font-medium hover:text-ecolive-light-green transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Categories
            </a>
            <a 
              href="/about" 
              className="text-ecolive-dark-green text-lg font-medium hover:text-ecolive-light-green transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a 
              href="/contact" 
              className="text-ecolive-dark-green text-lg font-medium hover:text-ecolive-light-green transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>
            
            {/* Search in mobile menu */}
            <div className="pt-4 border-t">
              <button className="flex items-center space-x-3 text-ecolive-dark-green text-lg font-medium hover:text-ecolive-light-green transition-colors py-2">
                <Search size={20} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
