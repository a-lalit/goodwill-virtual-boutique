
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
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
    title: 'Minimalist Wool Coat',
    price: '$189.00',
    imageUrl: 'https://images.unsplash.com/photo-1548624313-0396c75d8be1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'Outerwear'
  },
  {
    id: 'item2',
    title: 'Classic Linen Shirt',
    price: '$79.00',
    imageUrl: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1051&q=80',
    category: 'Tops'
  },
  {
    id: 'item3',
    title: 'Tapered Cotton Trousers',
    price: '$95.00',
    imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    category: 'Bottoms'
  },
  {
    id: 'item4',
    title: 'Merino Wool Sweater',
    price: '$125.00',
    imageUrl: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1011&q=80',
    category: 'Knitwear'
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
            <span className="inline-block text-sm font-medium uppercase tracking-wider mb-3 text-gray-500">Featured Collection</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight">Timeless Essentials</h2>
          </div>
          <Link 
            to="/collection" 
            className="inline-flex items-center text-sm font-medium mt-4 md:mt-0 hover:text-gray-600 transition-colors"
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
              <div className="image-container rounded-xl mb-4 aspect-[3/4] overflow-hidden bg-gray-100">
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
                  <span className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">{item.category}</span>
                  <h3 className="text-base font-medium">{item.title}</h3>
                </div>
                <span className="font-medium">{item.price}</span>
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
    </section>
  );
};

export default FeaturedCollection;
