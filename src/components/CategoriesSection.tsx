
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: "Pipocas Gourmet",
      icon: "🍿",
      bgColor: "bg-bommer-orange/10",
      description: "Deliciosas pipocas em sabores exclusivos",
      link: "#products",
      image: "/lovable-uploads/cd9d5b6b-0057-45ac-87c7-0736e661db6c.png"
    },
    {
      id: 2,
      name: "Torresmo Artesanal",
      icon: "🥓",
      bgColor: "bg-bommer-green/10",
      description: "Crocante e irresistível torresmo caseiro",
      link: "#products",
      image: "/lovable-uploads/7ed604ed-ddcc-4b5e-a1a5-e710f97ef6c1.png"
    },
    {
      id: 3,
      name: "Café Especial",
      icon: "☕",
      bgColor: "bg-amber-100",
      description: "Grãos selecionados e torra perfeita",
      link: "#products"
    },
    {
      id: 4,
      name: "Combos & Pacotes",
      icon: "🎁",
      bgColor: "bg-gray-100",
      description: "Combinações especiais para todos os gostos",
      link: "#products"
    }
  ];

  return (
    <section id="categories" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <h2 className="section-title">Nossas Categorias</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl">
              Explore nossos produtos organizados por categorias e encontre o que você procura
            </p>
          </div>
          <a href="#products" className="mt-6 md:mt-0 flex items-center text-bommer-orange font-medium hover:underline">
            Ver todos os produtos <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className="border-none shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                {category.image ? (
                  <div className="mb-6 h-40 overflow-hidden rounded-xl">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className={`${category.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a 
                  href={category.link}
                  className="flex items-center text-bommer-orange font-medium hover:underline"
                >
                  Explorar <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
