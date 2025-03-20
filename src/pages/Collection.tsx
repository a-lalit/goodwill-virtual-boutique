
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import MainLayout from '@/layout/MainLayout';
import { Filter, X, ChevronDown } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  category: string;
  tags: string[];
}

const products: Product[] = [
  {
    id: 'product1',
    title: 'Minimalist Wool Coat',
    price: '$189.00',
    imageUrl: 'https://images.unsplash.com/photo-1548624313-0396c75d8be1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'women',
    tags: ['outerwear', 'new']
  },
  {
    id: 'product2',
    title: 'Classic Linen Shirt',
    price: '$79.00',
    imageUrl: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1051&q=80',
    category: 'men',
    tags: ['tops', 'sale']
  },
  {
    id: 'product3',
    title: 'Tapered Cotton Trousers',
    price: '$95.00',
    imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    category: 'men',
    tags: ['bottoms']
  },
  {
    id: 'product4',
    title: 'Merino Wool Sweater',
    price: '$125.00',
    imageUrl: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1011&q=80',
    category: 'men',
    tags: ['knitwear', 'new']
  },
  {
    id: 'product5',
    title: 'Silk Button-Up Blouse',
    price: '$110.00',
    imageUrl: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80',
    category: 'women',
    tags: ['tops', 'new']
  },
  {
    id: 'product6',
    title: 'Leather Crossbody Bag',
    price: '$145.00',
    imageUrl: 'https://images.unsplash.com/photo-1575032617751-6ddec2089882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
    category: 'accessories',
    tags: ['bags']
  },
  {
    id: 'product7',
    title: 'Pleated Midi Skirt',
    price: '$85.00',
    imageUrl: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
    category: 'women',
    tags: ['bottoms', 'sale']
  },
  {
    id: 'product8',
    title: 'Cashmere Scarf',
    price: '$68.00',
    imageUrl: 'https://images.unsplash.com/photo-1520903920243-e2feef5f2775?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'accessories',
    tags: ['winter', 'new']
  }
];

const Collection: React.FC = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoaded = (id: string) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    const filterParam = params.get('filter');
    
    setSelectedCategory(categoryParam);
    setSelectedFilter(filterParam);
    
    let filtered = products;
    
    if (categoryParam) {
      filtered = filtered.filter(product => product.category === categoryParam);
    }
    
    if (filterParam) {
      filtered = filtered.filter(product => product.tags.includes(filterParam));
    }
    
    setFilteredProducts(filtered);
  }, [location.search]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedFilter(null);
    setFilteredProducts(products);
    window.history.pushState({}, '', '/collection');
  };

  const getCategoryTitle = () => {
    if (selectedCategory === 'women') return 'Women\'s Collection';
    if (selectedCategory === 'men') return 'Men\'s Collection';
    if (selectedCategory === 'accessories') return 'Accessories';
    if (selectedFilter === 'new') return 'New Arrivals';
    if (selectedFilter === 'sale') return 'Sale Items';
    return 'All Products';
  };

  return (
    <MainLayout>
      <section className="pt-32 pb-16 md:pb-24 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4 animate-fade-in">
              {getCategoryTitle()}
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto animate-fade-in [animation-delay:200ms]">
              Discover our curated selection of timeless pieces designed for everyday elegance.
            </p>
          </div>
          
          {/* Filter Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 animate-fade-in [animation-delay:300ms]">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              {(selectedCategory || selectedFilter) && (
                <button 
                  onClick={clearFilters}
                  className="flex items-center space-x-1 text-sm text-gray-600 hover:text-black transition-colors px-3 py-1 bg-gray-100 rounded-full"
                >
                  <X size={14} />
                  <span>Clear filters</span>
                </button>
              )}
            </div>
            
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 text-sm font-medium"
            >
              <Filter size={16} />
              <span>Filter & Sort</span>
              <ChevronDown 
                size={16} 
                className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} 
              />
            </button>
          </div>
          
          {/* Filter Panel */}
          {isFilterOpen && (
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm animate-scale-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider mb-3">Category</h3>
                  <div className="space-y-2">
                    <button 
                      onClick={() => {
                        setSelectedCategory('women');
                        window.history.pushState({}, '', '/collection?category=women');
                      }}
                      className={`block text-sm ${selectedCategory === 'women' ? 'text-black font-medium' : 'text-gray-600'} hover:text-black transition-colors`}
                    >
                      Women
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedCategory('men');
                        window.history.pushState({}, '', '/collection?category=men');
                      }}
                      className={`block text-sm ${selectedCategory === 'men' ? 'text-black font-medium' : 'text-gray-600'} hover:text-black transition-colors`}
                    >
                      Men
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedCategory('accessories');
                        window.history.pushState({}, '', '/collection?category=accessories');
                      }}
                      className={`block text-sm ${selectedCategory === 'accessories' ? 'text-black font-medium' : 'text-gray-600'} hover:text-black transition-colors`}
                    >
                      Accessories
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider mb-3">Filter By</h3>
                  <div className="space-y-2">
                    <button 
                      onClick={() => {
                        setSelectedFilter('new');
                        window.history.pushState({}, '', '/collection?filter=new');
                      }}
                      className={`block text-sm ${selectedFilter === 'new' ? 'text-black font-medium' : 'text-gray-600'} hover:text-black transition-colors`}
                    >
                      New Arrivals
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedFilter('sale');
                        window.history.pushState({}, '', '/collection?filter=sale');
                      }}
                      className={`block text-sm ${selectedFilter === 'sale' ? 'text-black font-medium' : 'text-gray-600'} hover:text-black transition-colors`}
                    >
                      Sale
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider mb-3">Sort By</h3>
                  <div className="space-y-2">
                    <button className="block text-sm text-gray-600 hover:text-black transition-colors">
                      Newest
                    </button>
                    <button className="block text-sm text-gray-600 hover:text-black transition-colors">
                      Price: Low to High
                    </button>
                    <button className="block text-sm text-gray-600 hover:text-black transition-colors">
                      Price: High to Low
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="image-container rounded-xl mb-4 aspect-[3/4] overflow-hidden bg-gray-100">
                  <img 
                    src={product.imageUrl} 
                    alt={product.title}
                    className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                      loadedImages.has(product.id) ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoaded(product.id)}
                  />
                  <div className="overlay-gradient"></div>
                  
                  {product.tags.includes('sale') && (
                    <div className="absolute top-3 right-3 bg-black text-white text-xs font-medium px-2 py-1 rounded-full">
                      SALE
                    </div>
                  )}
                  
                  {product.tags.includes('new') && (
                    <div className="absolute top-3 right-3 bg-black text-white text-xs font-medium px-2 py-1 rounded-full">
                      NEW
                    </div>
                  )}
                </div>
                
                <div className="flex items-start justify-between mt-2">
                  <div>
                    <span className="block text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">{product.category}</span>
                    <h3 className="text-base font-medium">{product.title}</h3>
                  </div>
                  <span className="font-medium">{product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Collection;
