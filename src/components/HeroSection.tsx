
const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-orange-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-12">
        <div className="text-left animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="block text-bommer-black">Sabor e</span>
            <span className="block text-bommer-orange">Qualidade</span>
            <span className="block text-bommer-green">em Cada Mordida</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-md">
            Deliciosas pipocas, torresmo crocante e café fresco para todos os momentos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#products" className="btn btn-primary px-8 py-3 text-base font-bold">
              Ver Produtos
            </a>
            <a href="#order" className="btn btn-secondary px-8 py-3 text-base font-bold">
              Pedir Agora
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-square bg-bommer-orange/10 rounded-full absolute -top-4 -right-4 w-3/4 h-3/4"></div>
          <div className="aspect-square bg-bommer-green/10 rounded-full absolute -bottom-4 -left-4 w-1/2 h-1/2"></div>
          
          <div className="relative bg-white p-6 rounded-3xl shadow-xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square rounded-2xl overflow-hidden bg-orange-100 flex items-center justify-center">
                <div className="transform -rotate-12 text-6xl">🍿</div>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-amber-100 flex items-center justify-center">
                <div className="transform rotate-12 text-6xl">🥓</div>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-green-100 flex items-center justify-center">
                <div className="transform -rotate-6 text-6xl">☕</div>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-bommer-orange/20 to-bommer-green/20 flex items-center justify-center">
                <span className="text-3xl font-bold text-bommer-black">Bommer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
