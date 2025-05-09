
const Footer = () => {
  return (
    <footer className="py-12 bg-bommer-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <img 
                src="/lovable-uploads/1667d307-5c7e-4bfa-afec-3de03377a04d.png" 
                alt="Bommer Logo" 
                className="h-12" 
              />
            </a>
            <p className="text-gray-400 max-w-xs mt-4">
              Bommer oferece experiências gastronômicas com pipocas artesanais, torresmo crocante e café de alta qualidade.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                (11) 5555-5555
              </li>
              <li className="text-gray-400">
                contato@bommer.com.br
              </li>
              <li className="text-gray-400">
                Av. Paulista, 1234, São Paulo - SP
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Bommer. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
