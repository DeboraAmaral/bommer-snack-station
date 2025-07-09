
import React, { useState } from 'react';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center">
            <span className="text-ecolive-dark-green font-bold text-2xl">Eco<span className="text-ecolive-light-green">Live</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-ecolive-dark-green font-medium hover:text-ecolive-light-green transition-colors">Home</a>
          <a href="/shop" className="text-ecolive-dark-green font-medium hover:text-ecolive-light-green transition-colors">Shop</a>
          <a href="/categories" className="text-ecolive-dark-green font-medium hover:text-ecolive-light-green transition-colors">Categories</a>
          <a href="/about" className="text-ecolive-dark-green font-medium hover:text-ecolive-light-green transition-colors">About</a>
          <a href="/contact" className="text-ecolive-dark-green font-medium hover:text-ecolive-light-green transition-colors">Contact</a>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-ecolive-dark-green hover:text-ecolive-light-green transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 text-ecolive-dark-green hover:text-ecolive-light-green transition-colors">
            <User size={20} />
          </button>
          <button className="p-2 text-ecolive-dark-green hover:text-ecolive-light-green transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-ecolive-light-green text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-ecolive-dark-green hover:text-ecolive-light-green transition-colors"
            onClick={toggleMobileMenu}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="container py-4 flex justify-between items-center border-b">
            <span className="text-ecolive-dark-green font-bold text-2xl">Eco<span className="text-ecolive-light-green">Live</span></span>
            <button onClick={toggleMobileMenu} className="p-2">
              <X size={24} className="text-ecolive-dark-green" />
            </button>
          </div>
          <div className="container flex-1 flex flex-col py-8 space-y-6">
            <a href="/" className="text-ecolive-dark-green text-xl font-medium hover:text-ecolive-light-green transition-colors">Home</a>
            <a href="/shop" className="text-ecolive-dark-green text-xl font-medium hover:text-ecolive-light-green transition-colors">Shop</a>
            <a href="/categories" className="text-ecolive-dark-green text-xl font-medium hover:text-ecolive-light-green transition-colors">Categories</a>
            <a href="/about" className="text-ecolive-dark-green text-xl font-medium hover:text-ecolive-light-green transition-colors">About</a>
            <a href="/contact" className="text-ecolive-dark-green text-xl font-medium hover:text-ecolive-light-green transition-colors">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
