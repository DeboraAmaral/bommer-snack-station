
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title">Nossa História</h2>
            <p className="mt-6 text-gray-600 text-lg">
              A Bommer nasceu da paixão por sabores autênticos e da vontade de criar experiências gastronômicas memoráveis. Fundada em 2010, começamos como uma pequena barraca vendendo apenas pipoca gourmet.
            </p>
            <p className="mt-4 text-gray-600 text-lg">
              Com o tempo, expandimos nosso cardápio para incluir torresmo artesanal e café especial, sempre mantendo nosso compromisso com a qualidade e o sabor incomparável.
            </p>
            <p className="mt-4 text-gray-600 text-lg">
              Hoje, a Bommer é referência em snacks artesanais, combinando tradição e inovação para criar produtos que encantam nossos clientes em cada mordida.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <h4 className="text-4xl font-bold text-bommer-orange">10+</h4>
                <p className="text-gray-500 mt-1">Anos de experiência</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-bommer-green">5k</h4>
                <p className="text-gray-500 mt-1">Clientes satisfeitos</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-bommer-black">20+</h4>
                <p className="text-gray-500 mt-1">Variedades de produtos</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square rounded-full bg-bommer-orange/10 absolute -top-5 -left-5 w-40 h-40"></div>
            <div className="aspect-square rounded-full bg-bommer-green/10 absolute -bottom-5 -right-5 w-60 h-60"></div>
            
            <div className="relative grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white rounded-3xl shadow-md p-4 flex items-center justify-center">
                <div className="text-6xl transform -rotate-12">🍿</div>
              </div>
              <div className="aspect-square bg-bommer-orange/10 rounded-3xl shadow-md p-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-bommer-black">Est. 2010</span>
              </div>
              <div className="aspect-square bg-bommer-green/10 rounded-3xl shadow-md p-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-bommer-black">Artesanal</span>
              </div>
              <div className="aspect-square bg-white rounded-3xl shadow-md p-4 flex items-center justify-center">
                <div className="text-6xl transform rotate-12">☕</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
