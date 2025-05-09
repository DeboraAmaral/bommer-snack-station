
const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Pipocas Premium",
      description: "Nossa pipoca artesanal é feita com grãos selecionados e preparada na hora para garantir o máximo sabor e frescor.",
      icon: "🍿",
      color: "from-orange-100 to-orange-200",
      btnColor: "btn-primary"
    },
    {
      id: 2,
      name: "Torresmo Crocante",
      description: "Torresmo de primeira qualidade, crocante por fora e macio por dentro, temperado com nossa receita exclusiva.",
      icon: "🥓",
      color: "from-amber-100 to-amber-200",
      btnColor: "btn-secondary"
    },
    {
      id: 3,
      name: "Café Especial",
      description: "Grãos selecionados de regiões produtoras premium, torrados e moídos na medida certa para um café perfeito.",
      icon: "☕",
      color: "from-green-100 to-green-200",
      btnColor: "btn-primary"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Nossos Produtos</h2>
        <p className="subtitle text-center">Experimente o melhor da Bommer com nossos produtos artesanais feitos com ingredientes de alta qualidade.</p>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-gradient-to-br rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              style={{ background: `linear-gradient(to bottom right, ${product.id === 1 ? '#fff6e5' : product.id === 2 ? '#fff4e0' : '#e7f5e7'}, white)` }}
            >
              <div className="p-8">
                <div className="mb-6 text-6xl">{product.icon}</div>
                <h3 className="text-2xl font-bold text-bommer-black mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-8">{product.description}</p>
                <a 
                  href="#order" 
                  className={`btn ${product.btnColor} px-6 py-2 w-full text-center`}
                >
                  Pedir Agora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
