
import React from 'react';
import { MapPin } from 'lucide-react';

const MiniMap = () => {
  const address = "Rua das Flores, 123 - Centro, São Paulo - SP";
  const encodedAddress = encodeURIComponent(address);
  
  const handleMapClick = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div 
        className="relative h-48 bg-gradient-to-br from-green-100 to-green-200 cursor-pointer group transition-all duration-300 hover:shadow-lg"
        onClick={handleMapClick}
      >
        {/* Simulação de mapa com padrão de grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-green-300"></div>
            ))}
          </div>
        </div>
        
        {/* Marcador do local */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <MapPin className="w-8 h-8 text-red-500 drop-shadow-md animate-bounce" fill="currentColor" />
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-black/20 rounded-full blur-sm"></div>
          </div>
        </div>
        
        {/* Overlay com hover effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 px-4 py-2 rounded-full shadow-lg">
            <span className="text-sm font-medium text-gray-700">Clique para abrir no Google Maps</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-ecolive-light-green flex-shrink-0 mt-1" />
          <div>
            <p className="text-sm font-medium text-gray-900 mb-1">Nossa Localização</p>
            <p className="text-sm text-gray-600 leading-relaxed">{address}</p>
            <button 
              onClick={handleMapClick}
              className="text-ecolive-light-green hover:text-ecolive-dark-green text-sm font-medium mt-2 transition-colors duration-200"
            >
              Ver no Google Maps →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniMap;
