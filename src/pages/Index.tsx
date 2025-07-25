
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from "../components/AboutSection";
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import PartnersSection from '../components/PartnersSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <CategorySection />
        <FeaturedProducts />
        <div className="py-12 md:py-16 bg-white">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-ecolive-light-green bg-opacity-10 p-4 sm:p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-ecolive-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Free Shipping</h3>
                <p className="text-ecolive-text-light text-sm sm:text-base">Free shipping on all orders over $50</p>
              </div>

              <div className="bg-ecolive-light-green bg-opacity-10 p-4 sm:p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-ecolive-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">100% Organic</h3>
                <p className="text-ecolive-text-light text-sm sm:text-base">All products certified organic and natural</p>
              </div>

              <div className="bg-ecolive-light-green bg-opacity-10 p-4 sm:p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-ecolive-light-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Money Back</h3>
                <p className="text-ecolive-text-light text-sm sm:text-base">30-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>
        <PartnersSection />
      </main>
    </div>
  );
};

export default Index;
