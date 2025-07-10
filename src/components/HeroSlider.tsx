import React, { useState, useEffect } from 'react';

const heroImages = [
  '/assets/banner-pipoca02.jpg',
  '/assets/banner-cafe.jpg',
  '/assets/banner-torresmo.jpg'
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      {heroImages.map((imgUrl, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
      ))}
    </div>
  );
}