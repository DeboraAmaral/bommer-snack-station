
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { value: "10+", label: "Anos de experiência" },
    { value: "5k", label: "Clientes satisfeitos" },
    { value: "20+", label: "Variedades de produtos" }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[90%] bg-bommer-orange/5 rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80" 
              alt="Sobre a Bommer" 
              className="rounded-3xl shadow-xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-bommer-green/10 p-3 rounded-full">
                  <span className="text-3xl">🌱</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Sustentabilidade</p>
                  <p className="text-gray-500">Compromisso com o meio ambiente</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <span className="inline-block px-4 py-1 bg-bommer-green/10 text-bommer-green rounded-full mb-6 font-medium">Nossa história</span>
            <h2 className="section-title mb-6">Tradição e qualidade desde 2010</h2>
            <p className="text-lg text-gray-700 mb-4">
              A Bommer nasceu da paixão por sabores autênticos e da vontade de criar experiências gastronômicas memoráveis. Fundada em 2010, começamos como uma pequena barraca vendendo apenas pipoca gourmet.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Com o tempo, expandimos nosso cardápio para incluir torresmo artesanal e café especial, sempre mantendo nosso compromisso com a qualidade e o sabor incomparável.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 border border-gray-100 rounded-xl">
                  <h3 className="text-3xl font-bold text-bommer-black">{stat.value}</h3>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn btn-secondary px-8 py-3 text-base font-bold flex items-center w-fit">
              Conheça mais sobre nós <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
