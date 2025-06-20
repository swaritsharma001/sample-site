
import React from 'react';
import { Car, MapPin, CarFront } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: 'Quality Inspection',
      description: 'Every vehicle undergoes a comprehensive 150-point inspection to ensure the highest quality standards.'
    },
    {
      icon: MapPin,
      title: 'Nationwide Delivery',
      description: 'We offer secure and insured vehicle delivery anywhere in the country, bringing your car to your doorstep.'
    },
    {
      icon: CarFront,
      title: 'Trade-In Program',
      description: 'Get the best value for your current vehicle with our competitive trade-in evaluation process.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-[slideInDown_1s_ease-out]">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out_0.3s_both]">
            We provide comprehensive automotive solutions to make your car buying experience seamless and enjoyable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 text-center group animate-[fadeInUp_0.6s_ease-out_both]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 group-hover:bg-blue-200">
                <service.icon className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
