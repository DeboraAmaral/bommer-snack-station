
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { value: "10+", label: "Anos de experiência" },
    { value: "5k", label: "Clientes satisfeitos" },
    { value: "20+", label: "Variedades de produtos" }
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[90%] bg-bommer-orange/5 rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80" 
              alt="Sobre a Bommer" 
              className="rounded-3xl shadow-xl object-cover w-full h-64 sm:h-80 md:h-96"
            />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-bommer-green/10 p-2 sm:p-3 rounded-full">
                  <span className="text-xl sm:text-3xl">🌱</span>
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-lg">Sustentabilidade</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Compromisso com o meio ambiente</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="inline-block px-3 sm:px-4 py-1 bg-bommer-green/10 text-bommer-green rounded-full mb-4 sm:mb-6 font-medium text-sm">Nossa história</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Tradição e qualidade desde 2010</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4">
              A Bommer nasceu da paixão por sabores autênticos e da vontade de criar experiências gastronômicas memoráveis. Fundada em 2010, começamos como uma pequena barraca vendendo apenas pipoca gourmet.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              Com o tempo, expandimos nosso cardápio para incluir torresmo artesanal e café especial, sempre mantendo nosso compromisso com a qualidade e o sabor incomparável.
            </p>
            
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-2 sm:p-4 border border-gray-100 rounded-xl">
                  <h3 className="text-xl sm:text-3xl font-bold text-bommer-black">{stat.value}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn btn-secondary px-6 sm:px-8 py-3 text-sm sm:text-base font-bold flex items-center justify-center sm:justify-start w-full sm:w-fit">
              Conheça mais sobre nós <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
