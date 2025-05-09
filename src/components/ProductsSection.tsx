
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ShoppingCart } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Pipoca Caramelizada",
      price: "R$ 15,90",
      description: "Nossa clássica pipoca com cobertura de caramelo crocante.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80",
      badge: "Mais Vendido",
      badgeColor: "bg-bommer-orange text-white"
    },
    {
      id: 2,
      name: "Torresmo Premium",
      price: "R$ 18,50",
      description: "Torresmo crocante e macio, temperado com nossa receita exclusiva.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80",
      badge: "Novidade",
      badgeColor: "bg-bommer-green text-white"
    },
    {
      id: 3,
      name: "Café Especial",
      price: "R$ 12,90",
      description: "Grãos selecionados com torra média e notas de chocolate.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80"
    },
    {
      id: 4,
      name: "Pipoca Gourmet Mix",
      price: "R$ 22,90",
      description: "Mix de sabores especiais: caramelo, chocolate e cheddar.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80"
    }
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <h2 className="section-title">Nossos Produtos</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl">
              Experimente o melhor da Bommer com nossos produtos artesanais feitos com ingredientes de alta qualidade
            </p>
          </div>
        </div>
        
        <div className="mt-12 px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                  <div className="bg-white rounded-3xl shadow-md overflow-hidden h-full flex flex-col">
                    <div className="relative h-56">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                      {product.badge && (
                        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${product.badgeColor}`}>
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-bommer-black">{product.price}</span>
                        <button className="btn btn-primary p-2 rounded-full">
                          <ShoppingCart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-8">
              <CarouselPrevious className="static transform-none rounded-full border-bommer-orange text-bommer-orange hover:bg-bommer-orange hover:text-white" />
              <CarouselNext className="static transform-none rounded-full border-bommer-orange text-bommer-orange hover:bg-bommer-orange hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
