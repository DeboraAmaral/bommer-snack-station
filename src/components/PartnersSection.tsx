
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PartnersSection = () => {
  // Logos de parceiros fictícios - você pode substituir pelos logos reais
  const partners = [
    { name: "Partner 1", logo: "/assets/logo.png" },
    { name: "Partner 2", logo: "/assets/logo.png" },
    { name: "Partner 3", logo: "/assets/logo.png" },
    { name: "Partner 4", logo: "/assets/logo.png" },
    { name: "Partner 5", logo: "/assets/logo.png" },
    { name: "Partner 6", logo: "/assets/logo.png" },
  ];

  React.useEffect(() => {
    const carousel = document.querySelector('[data-carousel="partners"]');
    if (!carousel) return;

    const interval = setInterval(() => {
      const nextButton = carousel.querySelector('[data-carousel-next]');
      if (nextButton) {
        (nextButton as HTMLButtonElement).click();
      }
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-ecolive-dark-green mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-ecolive-text-light max-w-2xl mx-auto">
            Trabalhamos com as melhores empresas para oferecer produtos de qualidade
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            data-carousel="partners"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="p-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 h-24 flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="hidden md:flex -left-12" 
              data-carousel-prev
            />
            <CarouselNext 
              className="hidden md:flex -right-12" 
              data-carousel-next
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
