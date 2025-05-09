
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Pipoca Caramelizada",
      price: "R$ 15,90",
      description: "Nossa clássica pipoca com cobertura de caramelo crocante.",
      image: "/lovable-uploads/cd9d5b6b-0057-45ac-87c7-0736e661db6c.png",
      badge: "Mais Vendido",
      badgeColor: "bg-bommer-orange text-white"
    },
    {
      id: 2,
      name: "Torresmo Tradicional",
      price: "R$ 18,50",
      description: "Torresmo crocante e macio, temperado com nossa receita exclusiva.",
      image: "/lovable-uploads/00e244ff-b5fd-4d2a-9808-feb5201342fe.png",
      badge: "Novidade",
      badgeColor: "bg-bommer-green text-white"
    },
    {
      id: 3,
      name: "Pipoca com Chocolate",
      price: "R$ 17,90",
      description: "Deliciosa pipoca caramelizada com cobertura de chocolate ao leite.",
      image: "/lovable-uploads/cf653b62-6b04-45e1-ae52-c1d667bd6dbc.png"
    },
    {
      id: 4,
      name: "Pipoca Chocolate Branco",
      price: "R$ 17,90",
      description: "Pipoca caramelizada com delicada cobertura de chocolate branco.",
      image: "/lovable-uploads/b18a5dad-9702-4930-939b-83717115dbfb.png"
    },
    {
      id: 5,
      name: "Pipoca Colorida Circus",
      price: "R$ 19,90",
      description: "Mix de pipocas coloridas e caramelizadas, especial para festas.",
      image: "/lovable-uploads/6b4725cb-41e3-499a-b8c6-be22821094fe.png"
    },
    {
      id: 6,
      name: "Pipoca de Coco",
      price: "R$ 16,90",
      description: "Pipoca doce caramelizada com delicioso sabor de coco.",
      image: "/lovable-uploads/748bf998-f77f-414b-b0fe-51e96cea8c52.png"
    },
    {
      id: 7,
      name: "Pipoca Flor de Sal",
      price: "R$ 16,90",
      description: "Pipoca caramelizada com toque especial de flor de sal.",
      image: "/lovable-uploads/5d0221d2-6467-49f9-b7c5-41a2415870fb.png"
    },
    {
      id: 8,
      name: "Torresmo Limão",
      price: "R$ 18,90",
      description: "Torresmo artesanal com toque refrescante de limão.",
      image: "/lovable-uploads/7ed604ed-ddcc-4b5e-a1a5-e710f97ef6c1.png"
    },
    {
      id: 9,
      name: "Torresmo Pimenta",
      price: "R$ 18,90",
      description: "Torresmo artesanal com tempero picante de pimenta.",
      image: "/lovable-uploads/e43d51f8-6c3e-45cf-bebf-bcd855d8c557.png"
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
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
                  <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <div className="relative">
                      <AspectRatio ratio={1}>
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className={cn(
                            "w-full h-full object-cover transition-transform duration-500 hover:scale-105",
                          )}
                        />
                      </AspectRatio>
                      {product.badge && (
                        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${product.badgeColor}`}>
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xl font-bold text-bommer-black">{product.price}</span>
                        <button className="btn btn-primary p-3 rounded-full hover:scale-110 transition-transform duration-200">
                          <ShoppingCart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-8">
              <CarouselPrevious className="static transform-none rounded-full border-bommer-orange text-bommer-orange hover:bg-bommer-orange hover:text-white transition-colors" />
              <CarouselNext className="static transform-none rounded-full border-bommer-orange text-bommer-orange hover:bg-bommer-orange hover:text-white transition-colors" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
