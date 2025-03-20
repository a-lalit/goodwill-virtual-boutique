
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const categories: Category[] = [
  {
    id: 'women',
    title: 'Women',
    description: 'Elegant essentials for every occasion',
    imageUrl: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80',
    link: '/collection?category=women'
  },
  {
    id: 'men',
    title: 'Men',
    description: 'Contemporary classics for the modern man',
    imageUrl: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    link: '/collection?category=men'
  },
  {
    id: 'accessories',
    title: 'Accessories',
    description: 'Finishing touches for your everyday look',
    imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
    link: '/collection?category=accessories'
  }
];

const CategorySection: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoaded = (id: string) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium uppercase tracking-wider mb-3 text-gray-500">Browse Categories</span>
          <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight">Find Your Style</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.link}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={category.imageUrl} 
                  alt={category.title}
                  className={`w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-105 ${
                    loadedImages.has(category.id) ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoaded(category.id)}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-display font-medium mb-2">{category.title}</h3>
                <p className="text-white/90 mb-4 max-w-xs">{category.description}</p>
                <span className="inline-block text-sm font-medium border-b border-white/70 pb-0.5 transition-all group-hover:border-white">Explore Collection</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
