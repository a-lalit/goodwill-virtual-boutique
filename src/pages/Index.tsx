
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
              <span className="inline-block text-sm font-medium uppercase tracking-wider mb-3 text-primary">Our Heritage</span>
              <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6">Celebrating India's Rich Textile Legacy</h2>
              <p className="text-gray-600 mb-4 text-balance">
                At Goodwill, we honor the centuries-old traditions of Indian craftsmanship while embracing sustainable practices. 
                Our approach celebrates the skilled artisans who preserve techniques passed down through generations.
              </p>
              <p className="text-gray-600 mb-6 text-balance">
                Each piece in our collection tells a story of heritage and innovation, 
                from hand-blocked prints of Rajasthan to the intricate weaves of Banarasi silk, 
                all created with respect for both tradition and our environment.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors"
              >
                Discover our artisan stories <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="order-1 md:order-2 animate-slide-in-from-right [animation-delay:400ms]">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1602063838858-31f14659f07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2672&q=80" 
                  alt="Indian Textile Artisan" 
                  className="rounded-xl w-full h-auto object-cover aspect-[4/5] animate-blur-in"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-sm w-48 hidden md:block">
                  <p className="text-sm font-medium">Handmade with pride by skilled Indian artisans.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="inline-block text-sm font-medium uppercase tracking-wider mb-3 text-white/80">Stay Connected</span>
          <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6">Join Our Community</h2>
          <p className="text-white/90 mb-8 max-w-md mx-auto text-balance">
            Subscribe to receive updates on new collections, special festival offers, and exclusive invitations.
          </p>
          
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 flex-grow"
                aria-label="Email address"
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-india-saffron text-black rounded-full font-medium transition-all hover:bg-white hover:text-primary button-transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-white/70 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
