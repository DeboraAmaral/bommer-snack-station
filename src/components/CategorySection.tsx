
import React from 'react';

type Category = {
  id: number;
  name: string;
  image: string;
  count: number;
};

const categories: Category[] = [
  {
    id: 1,
    name: 'Fresh Fruits',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=2670',
    count: 24,
  },
  {
    id: 2,
    name: 'Fresh Vegetables',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=2574',
    count: 36,
  },
  {
    id: 3,
    name: 'Organic Nuts',
    image: 'https://images.unsplash.com/photo-1611027643273-9d9a8d37b5af?q=80&w=2574',
    count: 18,
  },
  {
    id: 4,
    name: 'Fresh Bread',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2574',
    count: 15,
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-ecolive-light-green font-medium">Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Browse By Category</h2>
          <p className="text-ecolive-text-light max-w-2xl mx-auto">
            Discover our wide range of organic products carefully selected for quality and freshness
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <a 
              key={category.id} 
              href={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-lg h-64 flex items-end transition-transform hover:scale-[1.02]"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="relative p-6 w-full">
                <h3 className="text-white font-medium text-xl">{category.name}</h3>
                <p className="text-white/80 text-sm mt-1">{category.count} products</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
