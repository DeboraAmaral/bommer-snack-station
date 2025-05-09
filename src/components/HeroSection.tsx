
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 py-24 relative">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div className="text-left animate-fade-in">
            <span className="inline-block px-4 py-1 bg-bommer-orange/10 text-bommer-orange rounded-full mb-6 font-medium">Sabor de qualidade</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="block text-bommer-black">Descubra o sabor</span>
              <span className="block text-bommer-orange mt-2">autêntico da</span>
              <span className="block text-bommer-green mt-2">Bommer</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-md">
              Deliciosas pipocas, torresmo crocante e café fresco para todos os momentos especiais do seu dia.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#products" className="btn btn-primary px-8 py-4 text-base font-bold">
                Ver Produtos
              </a>
              <a href="#categories" className="btn bg-white border border-gray-200 text-bommer-black hover:bg-gray-50 px-8 py-4 text-base font-bold flex items-center">
                Explorar Categorias <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80" 
              alt="Bommer Banner" 
              className="rounded-2xl shadow-2xl object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-bommer-orange/10 p-2 rounded-full">
                  <div className="text-2xl">🍿</div>
                </div>
                <div>
                  <p className="font-bold">100% Natural</p>
                  <p className="text-sm text-gray-500">Ingredientes selecionados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
