
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/layout/MainLayout';
import { ArrowLeft, Minus, Plus, Heart, Check } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  category: string;
  tags: string[];
  description?: string;
  details?: string[];
  materials?: string;
  sizes?: string[];
  colors?: {name: string, code: string}[];
}

const products: Product[] = [
  {
    id: 'product1',
    title: 'Minimalist Wool Coat',
    price: '$189.00',
    imageUrl: 'https://images.unsplash.com/photo-1548624313-0396c75d8be1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'women',
    tags: ['outerwear', 'new'],
    description: 'An elegant, minimalist coat crafted from premium wool blend. Designed with clean lines and a relaxed fit, this versatile piece complements any outfit while providing warmth and sophistication.',
    details: [
      'Premium wool blend fabric',
      'Relaxed fit with drop shoulders',
      'Two side pockets',
      'Button closure',
      'Fully lined'
    ],
    materials: '80% Wool, 20% Polyamide. Lining: 100% Viscose',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {name: 'Camel', code: '#D2B48C'},
      {name: 'Black', code: '#000000'},
      {name: 'Grey', code: '#808080'}
    ]
  },
  {
    id: 'product2',
    title: 'Classic Linen Shirt',
    price: '$79.00',
    imageUrl: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1051&q=80',
    category: 'men',
    tags: ['tops', 'sale'],
    description: 'A timeless linen shirt with a relaxed fit and clean design. Perfect for warm weather and casual styling, featuring premium European linen known for its breathability and texture.',
    details: [
      'Premium European linen',
      'Regular fit',
      'Button-down collar',
      'Chest pocket',
      'Mother-of-pearl buttons'
    ],
    materials: '100% European Linen',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {name: 'White', code: '#FFFFFF'},
      {name: 'Blue', code: '#AECBD6'},
      {name: 'Sand', code: '#E8D0A9'}
    ]
  },
  {
    id: 'product3',
    title: 'Tapered Cotton Trousers',
    price: '$95.00',
    imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    category: 'men',
    tags: ['bottoms'],
    description: 'Tailored trousers with a modern tapered fit, crafted from premium organic cotton twill. These versatile pants offer a smart-casual look suitable for various occasions.',
    details: [
      'Organic cotton twill',
      'Tapered fit',
      'Hook and bar closure',
      'Two side pockets and two back pockets',
      'Belt loops'
    ],
    materials: '100% Organic Cotton',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: [
      {name: 'Navy', code: '#1A2B4A'},
      {name: 'Olive', code: '#556B2F'},
      {name: 'Stone', code: '#D3CDBF'}
    ]
  },
  {
    id: 'product4',
    title: 'Merino Wool Sweater',
    price: '$125.00',
    imageUrl: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1011&q=80',
    category: 'men',
    tags: ['knitwear', 'new'],
    description: 'A luxuriously soft Merino wool sweater with a classic crew neck design. This premium knitwear piece offers natural temperature regulation and unmatched comfort year-round.',
    details: [
      'Extra-fine Merino wool',
      'Regular fit',
      'Ribbed collar, cuffs, and hem',
      'Lightweight and breathable',
      'Naturally temperature-regulating'
    ],
    materials: '100% Extra-fine Merino Wool',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {name: 'Navy', code: '#1A2B4A'},
      {name: 'Burgundy', code: '#800020'},
      {name: 'Forest', code: '#228B22'}
    ]
  }
];

const Product: React.FC = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const foundProduct = products.find(p => p.id === productId);
    setProduct(foundProduct || null);
    
    if (foundProduct && foundProduct.sizes) {
      setSelectedSize(foundProduct.sizes[1]); // Default to second size (usually S or M)
    }
    
    if (foundProduct && foundProduct.colors) {
      setSelectedColor(foundProduct.colors[0].name);
    }
    
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [productId]);
  
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    
    // Here you would typically dispatch to your cart state/context
    console.log('Added to cart:', {
      product,
      size: selectedSize,
      color: selectedColor,
      quantity
    });
    
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };
  
  if (!product) {
    return (
      <MainLayout>
        <div className="pt-32 pb-16 px-6 text-center">
          <h1 className="text-2xl font-medium mb-4">Product not found</h1>
          <Link to="/collection" className="text-black underline">Return to collection</Link>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <section className="pt-32 pb-16 md:py-24 px-6 md:px-12">
        <div className="container mx-auto">
          <Link 
            to="/collection" 
            className="inline-flex items-center text-sm mb-8 hover:text-gray-600 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to collection
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-100">
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
                  isLoaded ? 'scale-100 blur-0' : 'scale-105 blur-md'
                }`}
              />
            </div>
            
            {/* Product Details */}
            <div className={`transition-all duration-700 ease-out ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <span className="inline-block text-sm font-medium uppercase tracking-wider mb-2 text-gray-500">
                {product.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-4">
                {product.title}
              </h1>
              
              <span className="block text-2xl font-medium mb-6">{product.price}</span>
              
              <p className="text-gray-600 mb-8">
                {product.description}
              </p>
              
              {/* Color Selection */}
              {product.colors && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Color: {selectedColor}</h3>
                  <div className="flex space-x-3">
                    {product.colors.map(color => (
                      <button 
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                          selectedColor === color.name ? 'border-black' : 'border-transparent'
                        }`}
                        style={{ 
                          backgroundColor: color.code,
                          boxShadow: selectedColor === color.name ? '0 0 0 2px rgba(0,0,0,0.1)' : 'none'
                        }}
                        aria-label={`Select color: ${color.name}`}
                      >
                        {selectedColor === color.name && (
                          <Check size={16} className={color.code === '#FFFFFF' ? 'text-black' : 'text-white'} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Size Selection */}
              {product.sizes && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium">Size</h3>
                    <button className="text-xs text-gray-600 underline">Size Guide</button>
                  </div>
                  
                  <div className="grid grid-cols-5 gap-2">
                    {product.sizes.map(size => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 border rounded-md text-sm font-medium transition-all ${
                          selectedSize === size 
                            ? 'border-black bg-black text-white' 
                            : 'border-gray-300 text-gray-800 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity and Add to Cart */}
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-8">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="w-10 h-12 flex items-center justify-center text-gray-600 hover:text-black transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  
                  <span className="w-12 h-12 flex items-center justify-center font-medium">
                    {quantity}
                  </span>
                  
                  <button 
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="w-10 h-12 flex items-center justify-center text-gray-600 hover:text-black transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <button 
                  onClick={handleAddToCart}
                  className={`flex-grow py-3 px-6 rounded-md font-medium transition-all ${
                    isAddedToCart 
                      ? 'bg-green-600 text-white' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {isAddedToCart ? (
                    <span className="flex items-center justify-center">
                      <Check size={16} className="mr-2" />
                      Added to Cart
                    </span>
                  ) : 'Add to Cart'}
                </button>
                
                <button 
                  className="w-12 h-12 border border-gray-300 rounded-md flex items-center justify-center text-gray-600 hover:text-black hover:border-gray-400 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart size={18} />
                </button>
              </div>
              
              {/* Product Details */}
              <div className="space-y-6 border-t border-gray-200 pt-8">
                {product.details && (
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider mb-3">Product Details</h3>
                    <ul className="space-y-2 text-gray-600">
                      {product.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 text-black">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {product.materials && (
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider mb-3">Materials</h3>
                    <p className="text-gray-600">{product.materials}</p>
                  </div>
                )}
                
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider mb-3">Shipping & Returns</h3>
                  <p className="text-gray-600">Free standard shipping on all orders over $100. Returns accepted within 30 days of delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Product;
