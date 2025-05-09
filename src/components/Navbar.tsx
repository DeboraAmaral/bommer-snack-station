
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/1667d307-5c7e-4bfa-afec-3de03377a04d.png" 
                alt="Bommer Logo" 
                className="h-10" 
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/loja" className="text-bommer-black hover:text-bommer-orange transition-colors font-medium flex items-center">
              <ShoppingCart className="mr-2 h-5 w-5" /> Loja
            </Link>
            <a href="#products" className="text-bommer-black hover:text-bommer-orange transition-colors font-medium">
              Produtos
            </a>
            <a href="#about" className="text-bommer-black hover:text-bommer-orange transition-colors font-medium">
              Sobre
            </a>
            <a href="#contact" className="text-bommer-black hover:text-bommer-orange transition-colors font-medium">
              Contato
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
              <Link 
                to="/loja" 
                className="text-bommer-black hover:text-bommer-orange transition-colors font-medium flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart className="mr-2 h-5 w-5" /> Loja
              </Link>
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
