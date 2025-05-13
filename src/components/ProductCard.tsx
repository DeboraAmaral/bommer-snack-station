
import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  isOrganic?: boolean;
  isSale?: boolean;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const discount = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
    : 0;

  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-square">
        {/* Product image */}
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isOrganic && (
            <span className="bg-ecolive-light-green text-white text-xs font-medium px-2 py-1 rounded">
              Organic
            </span>
          )}
          
          {product.isSale && (
            <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
              -{discount}%
            </span>
          )}
        </div>

        {/* Quick actions */}
        <div className={`absolute bottom-0 left-0 right-0 bg-white p-3 flex justify-between items-center transform transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button className="text-ecolive-dark-green hover:text-ecolive-light-green transition-colors">
            <Heart size={20} />
          </button>
          <button className="bg-ecolive-light-green text-white py-2 px-4 rounded flex items-center gap-2 hover:opacity-90 transition-opacity text-sm">
            Add to Cart <ShoppingCart size={16} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <span className="text-xs text-ecolive-text-light">{product.category}</span>
        <h3 className="font-medium text-ecolive-dark-green mt-1 hover:text-ecolive-light-green transition-colors">
          <a href={`/product/${product.id}`}>
            {product.name}
          </a>
        </h3>
        <div className="mt-2 flex items-center">
          <span className="font-medium text-ecolive-light-green">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="ml-2 text-sm text-ecolive-text-light line-through">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
