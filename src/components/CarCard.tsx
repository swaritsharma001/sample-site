
import React from 'react';
import { Button } from '@/components/ui/button';
import { CarFront } from 'lucide-react';

interface CarCardProps {
  image: string;
  make: string;
  model: string;
  year: number;
  price: string;
  mileage: string;
  fuel: string;
  transmission: string;
}

const CarCard = ({ image, make, model, year, price, mileage, fuel, transmission }: CarCardProps) => {
  const carName = ` make: ${make} ${model} ${year}`;
  const whatsappMessage = encodeURIComponent(`Hey, I want to book ${carName}`);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105 hover:-translate-y-2 animate-fade-in">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={carName} 
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold transform group-hover:scale-110 transition-transform duration-300">
          {year}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-2">
          <CarFront className="h-5 w-5 text-blue-600 transform group-hover:rotate-12 transition-transform duration-300" />
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{make} {model}</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="transform hover:scale-105 transition-transform duration-200">
            <span className="font-medium">Mileage:</span> {mileage}
          </div>
          <div className="transform hover:scale-105 transition-transform duration-200">
            <span className="font-medium">Fuel:</span> {fuel}
          </div>
          <div className="col-span-2 transform hover:scale-105 transition-transform duration-200">
            <span className="font-medium">Transmission:</span> {transmission}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-2xl font-bold text-blue-600 animate-pulse">{price}</div>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 transform hover:scale-110 transition-all duration-300 hover:shadow-lg"
          >
            <a
  href={`https://wa.me/918340487605?text=${encodeURIComponent(`Hey, I want to book ${make} ${model} ${year}`)}`}
  target="_blank"
  rel="noopener noreferrer"
>
  Book Car
</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;