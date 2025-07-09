
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import MiniMap from './MiniMap';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Sobre a empresa */}
          <div>
            <h3 className="footer-title">EcoLive</h3>
            <p className="footer-text">
              Produtos orgânicos e naturais para uma vida mais saudável e sustentável. 
              Comprometidos com a qualidade e o meio ambiente.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="social-link">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="social-link">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links úteis */}
          <div>
            <h3 className="footer-title">Links Úteis</h3>
            <ul className="footer-links">
              <li><a href="#about">Sobre Nós</a></li>
              <li><a href="#products">Produtos</a></li>
              <li><a href="#contact">Contato</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#shipping">Entrega</a></li>
              <li><a href="#returns">Devoluções</a></li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="footer-title">Categorias</h3>
            <ul className="footer-links">
              <li><a href="#fruits">Frutas Orgânicas</a></li>
              <li><a href="#vegetables">Vegetais</a></li>
              <li><a href="#grains">Grãos e Cereais</a></li>
              <li><a href="#dairy">Laticínios</a></li>
              <li><a href="#beverages">Bebidas</a></li>
              <li><a href="#snacks">Snacks Saudáveis</a></li>
            </ul>
          </div>

          {/* Contato e Localização */}
          <div>
            <h3 className="footer-title">Contato</h3>
            <ul className="footer-contact">
              <li>
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </li>
              <li>
                <Mail className="w-4 h-4" />
                <span>contato@ecolive.com.br</span>
              </li>
              <li>
                <MapPin className="w-4 h-4" />
                <span>Rua das Flores, 123<br />Centro, São Paulo - SP</span>
              </li>
            </ul>

            {/* Mini Mapa */}
            <div className="mt-6">
              <MiniMap />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2024 EcoLive. Todos os direitos reservados.
          </p>
          <div className="payment-methods">
            <span>Pagamento:</span>
            <a href="#">Cartão</a>
            <a href="#">PIX</a>
            <a href="#">Boleto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
