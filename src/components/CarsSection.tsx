
import React from 'react';
import CarCard from './CarCard';

const CarsSection = () => {
  const cars = [
    {
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      make: 'BMW',
      model: 'X5',
      year: 2023,
      price: '$65,000',
      mileage: '12,000 mi',
      fuel: 'Gasoline',
      transmission: 'Automatic'
    },
    {
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      make: 'Mercedes',
      model: 'C-Class',
      year: 2022,
      price: '$45,000',
      mileage: '8,500 mi',
      fuel: 'Gasoline',
      transmission: 'Automatic'
    },
    {
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      make: 'Audi',
      model: 'A4',
      year: 2023,
      price: '$42,000',
      mileage: '15,000 mi',
      fuel: 'Gasoline',
      transmission: 'Automatic'
    },
    {
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      make: 'Tesla',
      model: 'Model 3',
      year: 2023,
      price: '$48,000',
      mileage: '5,000 mi',
      fuel: 'Electric',
      transmission: 'Automatic'
    },
    {
      image: 'https://images.unsplash.com/photo-1634673970798-a15ae56f6c65?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UG9yc2NoZSUyMDkxMXxlbnwwfHwwfHx8MA%3D%3D',
      make: 'Porsche',
      model: '911',
      year: 2022,
      price: '$125,000',
      mileage: '3,200 mi',
      fuel: 'Gasoline',
      transmission: 'Manual'
    },
    {
      image: 'https://images.unsplash.com/photo-1634673970798-a15ae56f6c65?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UG9yc2NoZSUyMDkxMXxlbnwwfHwwfHx8MA%3D%3D',
      make: 'Range Rover',
      model: 'Evoque',
      year: 2023,
      price: '$55,000',
      mileage: '7,800 mi',
      fuel: 'Gasoline',
      transmission: 'Automatic'
    }
  ];

  return (
    <section id="cars" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-[slideInDown_1s_ease-out]">
            Featured <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Vehicles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out_0.3s_both]">
            Explore our carefully curated selection of premium vehicles, each one meticulously inspected and ready for the road.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div 
              key={index} 
              className="animate-[fadeInUp_0.6s_ease-out_both]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CarCard {...car} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-[fadeInUp_1s_ease-out_0.8s_both]">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
            View All Cars
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarsSection;
