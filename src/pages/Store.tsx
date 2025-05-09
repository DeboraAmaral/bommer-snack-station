
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Product {
  id: number;
  name: string;
  price: string;
  numericPrice: number;
  description: string;
  image: string;
  badge?: string;
  badgeColor?: string;
  quantity?: number;
}

const Store = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<Product[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Pipoca Caramelizada",
      price: "R$ 15,90",
      numericPrice: 15.90,
      description: "Nossa clássica pipoca com cobertura de caramelo crocante.",
      image: "/lovable-uploads/cd9d5b6b-0057-45ac-87c7-0736e661db6c.png",
      badge: "Mais Vendido",
      badgeColor: "bg-bommer-orange text-white"
    },
    {
      id: 2,
      name: "Torresmo Tradicional",
      price: "R$ 18,50",
      numericPrice: 18.50,
      description: "Torresmo crocante e macio, temperado com nossa receita exclusiva.",
      image: "/lovable-uploads/00e244ff-b5fd-4d2a-9808-feb5201342fe.png",
      badge: "Novidade",
      badgeColor: "bg-bommer-green text-white"
    },
    {
      id: 3,
      name: "Pipoca com Chocolate",
      price: "R$ 17,90",
      numericPrice: 17.90,
      description: "Deliciosa pipoca caramelizada com cobertura de chocolate ao leite.",
      image: "/lovable-uploads/cf653b62-6b04-45e1-ae52-c1d667bd6dbc.png"
    },
    {
      id: 4,
      name: "Pipoca Chocolate Branco",
      price: "R$ 17,90",
      numericPrice: 17.90,
      description: "Pipoca caramelizada com delicada cobertura de chocolate branco.",
      image: "/lovable-uploads/b18a5dad-9702-4930-939b-83717115dbfb.png"
    },
    {
      id: 5,
      name: "Pipoca Colorida Circus",
      price: "R$ 19,90",
      numericPrice: 19.90,
      description: "Mix de pipocas coloridas e caramelizadas, especial para festas.",
      image: "/lovable-uploads/6b4725cb-41e3-499a-b8c6-be22821094fe.png"
    },
    {
      id: 6,
      name: "Pipoca de Coco",
      price: "R$ 16,90",
      numericPrice: 16.90,
      description: "Pipoca doce caramelizada com delicioso sabor de coco.",
      image: "/lovable-uploads/748bf998-f77f-414b-b0fe-51e96cea8c52.png"
    },
    {
      id: 7,
      name: "Pipoca Flor de Sal",
      price: "R$ 16,90",
      numericPrice: 16.90,
      description: "Pipoca caramelizada com toque especial de flor de sal.",
      image: "/lovable-uploads/5d0221d2-6467-49f9-b7c5-41a2415870fb.png"
    },
    {
      id: 8,
      name: "Torresmo Limão",
      price: "R$ 18,90",
      numericPrice: 18.90,
      description: "Torresmo artesanal com toque refrescante de limão.",
      image: "/lovable-uploads/7ed604ed-ddcc-4b5e-a1a5-e710f97ef6c1.png"
    },
    {
      id: 9,
      name: "Torresmo Pimenta",
      price: "R$ 18,90",
      numericPrice: 18.90,
      description: "Torresmo artesanal com tempero picante de pimenta.",
      image: "/lovable-uploads/e43d51f8-6c3e-45cf-bebf-bcd855d8c557.png"
    }
  ];
  
  const addToCart = (product: Product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: (item.quantity || 1) + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    toast({
      title: "Produto adicionado",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  const cartTotal = cart.reduce((total, item) => {
    return total + (item.numericPrice * (item.quantity || 1));
  }, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-bommer-black mb-2">Loja Bommer</h1>
            <p className="text-gray-600 mb-4">Compre nossos deliciosos produtos diretamente online.</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product List */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {product.badge && (
                        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${product.badgeColor}`}>
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xl font-bold text-bommer-black">{product.price}</span>
                        <Button 
                          onClick={() => addToCart(product)} 
                          className="bg-bommer-orange hover:bg-bommer-orange/90 text-white"
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" /> Adicionar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Shopping Cart */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <ShoppingCart className="mr-2" /> Carrinho
                  <span className="ml-auto bg-bommer-orange text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                    {cart.reduce((total, item) => total + (item.quantity || 1), 0)}
                  </span>
                </h2>
                
                {cart.length === 0 ? (
                  <p className="text-gray-500">Seu carrinho está vazio</p>
                ) : (
                  <>
                    <div className="divide-y max-h-96 overflow-auto">
                      {cart.map((item) => (
                        <div key={item.id} className="py-3 flex items-center">
                          <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="ml-3 flex-grow">
                            <h4 className="text-sm font-medium">{item.name}</h4>
                            <div className="flex items-center justify-between mt-1 text-sm">
                              <span>{item.price} × {item.quantity}</span>
                              <span className="font-medium">{`R$ ${(item.numericPrice * (item.quantity || 1)).toFixed(2).replace('.', ',')}`}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t mt-4 pt-4">
                      <div className="flex justify-between font-bold">
                        <span>Total:</span>
                        <span>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                      </div>
                      
                      <Button 
                        className="w-full mt-4 bg-bommer-green hover:bg-bommer-green/90 text-white" 
                      >
                        Finalizar Compra
                      </Button>
                      
                      <p className="text-xs text-center mt-4 text-gray-500">
                        Frete e impostos calculados no checkout
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Store;
