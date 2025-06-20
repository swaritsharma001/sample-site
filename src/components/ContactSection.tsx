
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Car } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-[slideInDown_1s_ease-out]">
            Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out_0.3s_both]">
            Ready to find your perfect car? Contact us today and let our experts help you drive away in your dream vehicle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 animate-[slideInLeft_1s_ease-out]">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 transform hover:scale-105 transition-transform duration-200 focus:scale-105" />
                <Input placeholder="Last Name" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 transform hover:scale-105 transition-transform duration-200 focus:scale-105" />
              </div>
              <Input placeholder="Email Address" type="email" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 transform hover:scale-105 transition-transform duration-200 focus:scale-105" />
              <Input placeholder="Phone Number" type="tel" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 transform hover:scale-105 transition-transform duration-200 focus:scale-105" />
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 transition-transform duration-200 focus:scale-105"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-full transform hover:scale-110 transition-all duration-300 hover:shadow-xl">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Location & Info */}
          <div className="space-y-8 animate-[slideInRight_1s_ease-out]">
            <div className="bg-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-6 w-6 text-blue-400 animate-pulse" />
                <h3 className="text-2xl font-bold">Visit Our Showroom</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="hover:text-white transition-colors duration-200">123 Auto Drive, Luxury District</p>
                <p className="hover:text-white transition-colors duration-200">Los Angeles, CA 90210</p>
                <p className="hover:text-white transition-colors duration-200">Phone: (555) 123-4567</p>
                <p className="hover:text-white transition-colors duration-200">Email: info@autovista.com</p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <Car className="h-6 w-6 text-blue-400 animate-pulse" />
                <h3 className="text-2xl font-bold">Business Hours</h3>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between hover:text-white transition-colors duration-200">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between hover:text-white transition-colors duration-200">
                  <span>Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between hover:text-white transition-colors duration-200">
                  <span>Sunday</span>
                  <span>11:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-800 rounded-2xl p-4 h-64 transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-gray-700 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="h-12 w-12 mx-auto mb-2 animate-bounce" />
                  <p>Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
