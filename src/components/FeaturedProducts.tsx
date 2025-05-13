
import React from 'react';
import ProductCard, { Product } from './ProductCard';

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: 'Organic Fresh Strawberry',
    price: 12.99,
    oldPrice: 15.99,
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2574',
    category: 'Fresh Fruits',
    isOrganic: true,
    isSale: true,
  },
  {
    id: 2,
    name: 'Fresh Organic Broccoli',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=2361',
    category: 'Fresh Vegetables',
    isOrganic: true,
  },
  {
    id: 3,
    name: 'Organic Mixed Nuts',
    price: 18.99,
    oldPrice: 22.99,
    image: 'https://images.unsplash.com/photo-1604598129351-2bdcc972ed0e?q=80&w=2670',
    category: 'Organic Nuts',
    isOrganic: true,
    isSale: true,
  },
  {
    id: 4,
    name: 'Fresh Avocado',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?q=80&w=2670',
    category: 'Fresh Fruits',
    isOrganic: true,
  },
  {
    id: 5,
    name: 'Sourdough Bread',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=2670',
    category: 'Fresh Bread',
  },
  {
    id: 6,
    name: 'Organic Tomatoes',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=2670',
    category: 'Fresh Vegetables',
    isOrganic: true,
  },
  {
    id: 7,
    name: 'Fresh Blueberries',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=2569',
    category: 'Fresh Fruits',
    isOrganic: true,
  },
  {
    id: 8,
    name: 'Whole Grain Bread',
    price: 5.49,
    oldPrice: 6.49,
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=2574',
    category: 'Fresh Bread',
    isSale: true,
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-ecolive-bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-ecolive-light-green font-medium">Featured Products</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Best Selling Products</h2>
          <p className="text-ecolive-text-light max-w-2xl mx-auto">
            Our most popular products based on sales and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/shop" className="btn-primary">View All Products</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
