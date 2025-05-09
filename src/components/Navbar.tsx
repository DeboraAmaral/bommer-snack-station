
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/1667d307-5c7e-4bfa-afec-3de03377a04d.png" 
                alt="Bommer Logo" 
                className="h-10" 
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
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
              Pedir Agora
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
                Pedir Agora
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
