
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-black/5 z-10"></div>
      
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out ${
          isLoaded ? 'scale-100 blur-0' : 'scale-[1.05] blur-md'
        }`}
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')` 
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div 
            className={`max-w-xl transform transition-all duration-1000 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="inline-block text-sm font-medium uppercase tracking-wider mb-6 bg-white/90 px-3 py-1 rounded-full">Summer Collection 2023</span>
            <h1 className="font-display text-5xl md:text-7xl font-medium leading-tight tracking-tight text-white drop-shadow-sm mb-6">
              Curated Styles for Modern Living
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-md leading-relaxed">
              Discover our carefully selected pieces designed to elevate your everyday wardrobe with timeless elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/collection" 
                className="inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-full font-medium transition-all hover:bg-black hover:text-white button-transition"
              >
                Shop Collection
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center bg-transparent text-white border border-white px-8 py-3 rounded-full font-medium transition-all hover:bg-white hover:text-black button-transition"
              >
                Our Story <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/50 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
