import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
     <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="./assets/logo.png" 
                alt="Bommer Logo" 
                className="h-10" 
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-bommer-black hover:text-bommer-orange transition-colors font-medium">
              Home
            </a>
            <a href="#products" className="text-bommer-black hover:text-bommer-orange transition-colors font-medium">
              Produtos
            </a>
            <a href="#about" className="text-bommer-black hover:text-bommer-orange transition-colors font-medium">
              Sobre
            </a>
            <a href="#contact" className="text-bommer-black hover:text-bommer-orange transition-colors font-medium">
              Contato
            </a>
            <a href="#order" className="btn btn-primary px-4 py-2">
              Comprar Agora
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-bommer-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-bommer-black hover:text-bommer-orange transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#products" 
                className="text-bommer-black hover:text-bommer-orange transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Produtos
              </a>
              <a 
                href="#about" 
                className="text-bommer-black hover:text-bommer-orange transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#contact" 
                className="text-bommer-black hover:text-bommer-orange transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
              <a 
                href="#order" 
                className="btn btn-primary px-4 py-2 w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Comprar Agora
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
