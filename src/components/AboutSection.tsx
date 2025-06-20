
import React from 'react';
import { useCountUp } from '@/hooks/useCountUp';

const StatCard = ({ end, suffix, label, delay }: { end: number; suffix: string; label: string; delay: number }) => {
  const { count, ref } = useCountUp({ end, duration: 2500 });
  
  return (
    <div 
      ref={ref}
      className="text-center transform hover:scale-110 transition-all duration-300 animate-[bounceIn_1s_ease-out_both]"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-4xl font-bold text-blue-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-[slideInLeft_1s_ease-out]">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-[fadeInDown_1s_ease-out]">
                About <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">AutoVista</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 animate-[fadeInUp_1s_ease-out_0.3s_both]">
                For over 25 years, AutoVista has been the premier destination for luxury and quality vehicles. 
                We pride ourselves on offering an exceptional car buying experience with unmatched customer service.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed animate-[fadeInUp_1s_ease-out_0.6s_both]">
                Our team of automotive experts carefully curates each vehicle in our inventory, ensuring that 
                every car meets our rigorous standards for quality, performance, and reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <StatCard end={25} suffix="+" label="Years Experience" delay={0.2} />
              <StatCard end={5000} suffix="+" label="Cars Sold" delay={0.4} />
              <StatCard end={98} suffix="%" label="Customer Satisfaction" delay={0.6} />
              <StatCard end={24} suffix="/7" label="Support" delay={0.8} />
            </div>
          </div>
          
          <div className="relative animate-[slideInRight_1s_ease-out]">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="AutoVista Dealership" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl hover:from-blue-600/30 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
