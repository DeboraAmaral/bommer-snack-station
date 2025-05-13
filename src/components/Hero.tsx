
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574')] bg-cover bg-center relative py-20 md:py-32">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container relative z-10">
        <div className="max-w-lg">
          <span className="inline-block bg-white text-ecolive-light-green px-3 py-1 rounded-full text-sm font-medium mb-4">
            100% Organic Food
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Organic Vegetables for Healthy Life
          </h1>
          <p className="text-white mb-8 text-lg">
            Fresh, organic produce delivered right to your doorstep. 
            Handpicked by our farmers with care and dedication.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/shop" className="btn-primary">
              Shop Now
            </a>
            <a href="/about" className="bg-white text-ecolive-dark-green py-3 px-6 rounded-md hover:bg-gray-100 transition font-medium inline-block text-center">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
