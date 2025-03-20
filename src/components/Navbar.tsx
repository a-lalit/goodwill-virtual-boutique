
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/collection' },
    { name: 'New Arrivals', path: '/collection?filter=new' },
    { name: 'About', path: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ease-in-out',
        isScrolled ? 'py-4 bg-white/90 shadow-sm backdrop-blur-md' : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-display font-medium tracking-tight"
        >
          goodwill.
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "text-sm hover-underline transition-colors",
                location.pathname === link.path ? "font-medium" : "text-gray-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-700 hover:text-black transition-colors" aria-label="Search">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link to="/cart" className="relative text-gray-700 hover:text-black transition-colors" aria-label="Shopping bag">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white rounded-full text-[10px] flex items-center justify-center">0</span>
          </Link>
        </div>
        
        <button 
          className="md:hidden text-gray-800" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out flex flex-col md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 flex justify-between items-center border-b">
          <Link to="/" className="text-2xl font-display font-medium">goodwill.</Link>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        
        <nav className="flex flex-col p-6 space-y-6">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "text-lg transition-colors",
                location.pathname === link.path ? "font-medium" : "text-gray-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="mt-auto p-6 border-t flex items-center justify-between">
          <button className="text-gray-700 p-2" aria-label="Search">
            <Search size={24} strokeWidth={1.5} />
          </button>
          <Link to="/cart" className="relative text-gray-700 p-2" aria-label="Shopping bag">
            <ShoppingBag size={24} strokeWidth={1.5} />
            <span className="absolute top-0 right-0 w-5 h-5 bg-black text-white rounded-full text-[10px] flex items-center justify-center">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
