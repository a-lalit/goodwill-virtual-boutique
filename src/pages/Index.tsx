
import React, { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import Hero from '@/components/Hero';
import FeaturedCollection from '@/components/FeaturedCollection';
import CategorySection from '@/components/CategorySection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      
      <FeaturedCollection />
      
      <CategorySection />
      
      {/* Story Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-slide-in-from-left [animation-delay:200ms]">
              <span className="inline-block text-sm font-medium uppercase tracking-wider mb-3 text-gray-500">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6">Mindful Fashion for Conscious Living</h2>
              <p className="text-gray-600 mb-4 text-balance">
                At Goodwill, we believe that style and responsibility can coexist. Our approach to fashion centers around sustainable practices, 
                ethical production, and timeless design that transcends seasonal trends.
              </p>
              <p className="text-gray-600 mb-6 text-balance">
                Each piece in our collection is thoughtfully designed and crafted to ensure longevity, 
                both in style and durability, reflecting our commitment to reducing fashion's environmental impact.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-sm font-medium hover:text-gray-600 transition-colors"
              >
                Learn more about our story <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="order-1 md:order-2 animate-slide-in-from-right [animation-delay:400ms]">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80" 
                  alt="Sustainable Fashion" 
                  className="rounded-xl w-full h-auto object-cover aspect-[4/5] animate-blur-in"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-sm w-48 hidden md:block">
                  <p className="text-sm font-medium">Ethically made with sustainable materials.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="inline-block text-sm font-medium uppercase tracking-wider mb-3 text-gray-400">Stay Connected</span>
          <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6">Join Our Community</h2>
          <p className="text-gray-300 mb-8 max-w-md mx-auto text-balance">
            Subscribe to receive updates on new collections, styling tips, and exclusive offers.
          </p>
          
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 flex-grow"
                aria-label="Email address"
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-white text-black rounded-full font-medium transition-all hover:bg-gray-200 button-transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
