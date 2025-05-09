
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Entre em Contato</h2>
        <p className="subtitle text-center">Estamos sempre prontos para atender você. Entre em contato conosco!</p>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {/* Location */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-bommer-orange/10 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-bommer-orange" />
            </div>
            <h3 className="text-xl font-bold mb-4">Nossa Localização</h3>
            <p className="text-gray-600">
              Av. Paulista, 1234<br />
              Bela Vista, São Paulo - SP<br />
              CEP: 01310-100
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-bommer-orange font-medium hover:underline">
              Ver no mapa
            </a>
          </div>
          
          {/* Contact */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-bommer-green/10 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-bommer-green" />
            </div>
            <h3 className="text-xl font-bold mb-4">Fale Conosco</h3>
            <p className="text-gray-600">
              Telefone: (11) 5555-5555<br />
              Email: contato@bommer.com.br<br />
              Horário: 09:00 - 18:00, Seg - Sáb
            </p>
            <a href="tel:+551155555555" className="inline-block mt-4 text-bommer-green font-medium hover:underline">
              Ligar agora
            </a>
          </div>
          
          {/* Social Media */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-bommer-black/10 rounded-full flex items-center justify-center mb-6">
              <Instagram className="w-8 h-8 text-bommer-black" />
            </div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <p className="text-gray-600">
              Siga-nos nas redes sociais para novidades, promoções e conteúdo exclusivo.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-bommer-orange text-white rounded-full flex items-center justify-center hover:bg-bommer-orange/80 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-bommer-green text-white rounded-full flex items-center justify-center hover:bg-bommer-green/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div id="order" className="mt-24 container mx-auto px-4">
        <div className="bg-gradient-to-r from-bommer-orange/90 to-bommer-orange rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para experimentar?
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Faça seu pedido agora mesmo e receba os deliciosos produtos Bommer no conforto da sua casa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+551155555555" className="btn bg-white text-bommer-orange hover:bg-white/90 px-8 py-3 font-bold">
                Pedir por Telefone
              </a>
              <a href="https://wa.me/551155555555" target="_blank" rel="noopener noreferrer" className="btn bg-bommer-green text-white hover:bg-bommer-green/90 px-8 py-3 font-bold">
                Pedir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
