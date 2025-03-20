
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-display font-medium tracking-tight">
              goodwill.
            </Link>
            <p className="mt-4 text-gray-600 max-w-xs">
              A curated experience in conscious fashion, crafted with care and attention to detail.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-black transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="mailto:hello@goodwill.com" className="text-gray-500 hover:text-black transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/collection?category=women" className="text-gray-600 hover:text-black transition-colors">Women</Link></li>
              <li><Link to="/collection?category=men" className="text-gray-600 hover:text-black transition-colors">Men</Link></li>
              <li><Link to="/collection?category=accessories" className="text-gray-600 hover:text-black transition-colors">Accessories</Link></li>
              <li><Link to="/collection?filter=new" className="text-gray-600 hover:text-black transition-colors">New Arrivals</Link></li>
              <li><Link to="/collection?filter=sale" className="text-gray-600 hover:text-black transition-colors">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-black transition-colors">Our Story</Link></li>
              <li><Link to="/about#sustainability" className="text-gray-600 hover:text-black transition-colors">Sustainability</Link></li>
              <li><Link to="/about#materials" className="text-gray-600 hover:text-black transition-colors">Materials</Link></li>
              <li><Link to="/about#manufacturing" className="text-gray-600 hover:text-black transition-colors">Manufacturing</Link></li>
              <li><Link to="/career" className="text-gray-600 hover:text-black transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-gray-600 hover:text-black transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-black transition-colors">FAQ</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-black transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row md:items-center justify-between">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Goodwill. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-6 w-auto opacity-50" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Mastercard" className="h-6 w-auto opacity-50" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="PayPal" className="h-6 w-auto opacity-50" />
            <img src="https://cdn-icons-png.flaticon.com/512/349/349230.png" alt="Apple Pay" className="h-6 w-auto opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
