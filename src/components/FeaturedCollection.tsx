
import React, { useState } from 'react';
import { ArrowRight, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedItem {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  category: string;
}

const featuredItems: FeaturedItem[] = [
  {
    id: 'item1',
    title: 'Handloom Pashmina Shawl',
    price: '₹14,999',
    imageUrl: 'https://images.unsplash.com/photo-1599032909756-5deb82fea3b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'Shawls'
  },
  {
    id: 'item2',
    title: 'Handcrafted Silk Kurta',
    price: '₹5,999',
    imageUrl: 'https://images.unsplash.com/photo-1610189020782-9eef96e99c53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1051&q=80',
    category: 'Kurtas'
  },
  {
    id: 'item3',
    title: 'Block Print Cotton Saree',
    price: '₹7,499',
    imageUrl: 'https://images.unsplash.com/photo-1628694647734-bf0ede3f6f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    category: 'Sarees'
  },
  {
    id: 'item4',
    title: 'Embroidered Nehru Jacket',
    price: '₹9,999',
    imageUrl: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1011&q=80',
    category: 'Jackets'
  }
];

const FeaturedCollection: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoaded = (id: string) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  return (
    <section className="section-spacing">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-block text-sm font-medium uppercase tracking-wider mb-3 text-primary">Premium Collection</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight">Handcrafted Treasures</h2>
          </div>
          <Link 
            to="/collection" 
            className="inline-flex items-center text-sm font-medium mt-4 md:mt-0 hover:text-primary transition-colors"
          >
            View All <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item) => (
            <Link 
              key={item.id}
              to={`/product/${item.id}`}
              className="group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="image-container rounded-xl mb-4 aspect-[3/4] overflow-hidden bg-gray-100 border-2 border-transparent hover:border-secondary/30 transition-colors">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                    loadedImages.has(item.id) ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoaded(item.id)}
                />
                <div className="overlay-gradient"></div>
              </div>
              
              <div className="flex items-start justify-between mt-2">
                <div>
                  <span className="block text-xs font-medium uppercase tracking-wider text-primary mb-1">{item.category}</span>
                  <h3 className="text-base font-medium">{item.title}</h3>
                </div>
                <span className="font-medium flex items-center">
                  {item.price}
                </span>
              </div>
              
              <div className={`transform transition-all duration-300 ease-out mt-3 ${
                hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <span className="inline-block text-sm font-medium hover-underline">View Details</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Decorative mandala divider */}
      <div className="mandala-divider mt-16"></div>
    </section>
  );
};

export default FeaturedCollection;
