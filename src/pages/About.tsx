
import React, { useEffect, useState, useRef } from 'react';
import MainLayout from '@/layout/MainLayout';

const About: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    const handleScroll = () => {
      sectionsRef.current.forEach((section) => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible) {
          section.classList.add('opacity-100', 'translate-y-0');
          section.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out ${
            isLoaded ? 'scale-100 blur-0' : 'scale-[1.05] blur-md'
          }`}
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1551446591-142875a901a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')` 
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-20 flex h-full items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div 
              className={`max-w-xl transition-all duration-1000 ease-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <span className="inline-block text-sm font-medium uppercase tracking-wider mb-6 bg-white/90 px-3 py-1 rounded-full">Our Story</span>
              <h1 className="font-display text-4xl md:text-6xl font-medium leading-tight tracking-tight text-white drop-shadow-sm mb-6">
                Crafting Conscious Fashion
              </h1>
              <p className="text-white/90 text-lg max-w-md leading-relaxed">
                Discover the journey behind Goodwill, our ethos, and our commitment to sustainable fashion.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section 
        ref={el => sectionsRef.current[0] = el}
        className="py-16 md:py-24 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        id="story"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-medium uppercase tracking-wider mb-3 text-gray-500">Founded in 2018</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed text-balance">
              Goodwill was founded with a simple yet powerful vision: to create thoughtfully designed clothing that respects both people and planet. We believe that fashion should be a force for good, balancing aesthetic beauty with ethical responsibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Goodwill Studio" 
                className="rounded-xl w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-display font-medium mb-4">From Concept to Creation</h3>
              <p className="text-gray-600 mb-4">
                Our journey began in a small studio in Copenhagen, where our founder Emma Berg, a textile designer with over a decade of experience in fashion, envisioned a different approach to clothing production.
              </p>
              <p className="text-gray-600 mb-4">
                Disillusioned by the waste and ethical concerns in the industry, Emma assembled a team of like-minded designers and artisans committed to challenging fashion's status quo.
              </p>
              <p className="text-gray-600">
                Today, Goodwill operates with the same foundational principles: creating timeless designs with sustainable materials, ethical manufacturing practices, and transparent business operations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section 
        ref={el => sectionsRef.current[1] = el}
        className="py-16 md:py-24 bg-gray-50 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        id="sustainability"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-medium uppercase tracking-wider mb-3 text-gray-500">Our Commitment</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6">Sustainable By Design</h2>
            <p className="text-gray-600 text-lg leading-relaxed text-balance">
              Sustainability isn't just a feature of our business—it's the foundation. Every decision we make is guided by our responsibility to minimize environmental impact and maximize social benefit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sprout">
                  <path d="M7 20h10"></path>
                  <path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
                  <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path>
                  <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Responsible Materials</h3>
              <p className="text-gray-600">
                We prioritize organic, recycled, and low-impact materials that reduce water usage, chemical pollution, and carbon emissions throughout their lifecycle.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-factory">
                  <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                  <path d="M17 18h1"></path>
                  <path d="M12 18h1"></path>
                  <path d="M7 18h1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Ethical Production</h3>
              <p className="text-gray-600">
                Our manufacturing partners meet strict standards for worker welfare, fair wages, and safe working conditions. We visit our facilities regularly and maintain transparent relationships.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-recycle">
                  <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path>
                  <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path>
                  <path d="m14 16-3 3 3 3"></path>
                  <path d="M8.293 13.596 4.875 9.5l3.326-4.589a1.83 1.83 0 0 1 1.584-.903H12"></path>
                  <path d="m14.5 7 3-3-3-3"></path>
                  <path d="M19.188 14.5h-4.979a1.83 1.83 0 0 1-1.557-.887l-2.454-4.229"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Circular Design</h3>
              <p className="text-gray-600">
                We design for longevity and recyclability, considering the entire lifecycle of each garment, from conception through to its eventual recycling or biodegradation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Materials */}
      <section 
        ref={el => sectionsRef.current[2] = el}
        className="py-16 md:py-24 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        id="materials"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block text-sm font-medium uppercase tracking-wider mb-3 text-gray-500">Thoughtful Choices</span>
              <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6">Our Materials</h2>
              <p className="text-gray-600 mb-6">
                The fabrics we choose form the foundation of our sustainable approach. We carefully select materials that minimize environmental impact while maximizing comfort, durability, and style.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Organic Cotton</h3>
                  <p className="text-gray-600 text-sm">Grown without synthetic pesticides or fertilizers, our GOTS-certified organic cotton uses 91% less water than conventional cotton.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Responsible Wool</h3>
                  <p className="text-gray-600 text-sm">Our wool comes from farms certified by the Responsible Wool Standard, ensuring proper animal welfare and land management practices.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Recycled Fibers</h3>
                  <p className="text-gray-600 text-sm">We incorporate recycled polyester made from post-consumer plastic bottles and recycled nylon from reclaimed fishing nets and carpet waste.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">TENCEL™ Lyocell</h3>
                  <p className="text-gray-600 text-sm">A breathable, biodegradable fiber made from sustainably harvested wood pulp in a closed-loop process that recovers 99% of the solvent used.</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1605518215584-5d2ff828fdec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80" 
                alt="Sustainable Materials" 
                className="rounded-xl w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Manufacturing */}
      <section 
        ref={el => sectionsRef.current[3] = el}
        className="py-16 md:py-24 bg-gray-50 opacity-0 translate-y-10 transition-all duration-700 ease-out"
        id="manufacturing"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-medium uppercase tracking-wider mb-3 text-gray-500">Ethical Production</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6">Our Manufacturing</h2>
            <p className="text-gray-600 text-lg leading-relaxed text-balance">
              We partner with small, family-owned factories in Portugal and ethical manufacturers in Vietnam who share our values of quality, craftsmanship, and worker welfare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium mb-4">Fair Labor Practices</h3>
              <p className="text-gray-600 mb-4">
                All our production partners maintain fair labor practices, including reasonable working hours, fair wages above local minimums, and safe working environments.
              </p>
              <p className="text-gray-600">
                We conduct regular third-party audits and maintain direct relationships with our manufacturers to ensure continuous compliance with our ethical standards.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium mb-4">Low-Impact Production</h3>
              <p className="text-gray-600 mb-4">
                Our manufacturing facilities employ water recycling systems, energy-efficient machinery, and renewable energy sources to minimize their environmental footprint.
              </p>
              <p className="text-gray-600">
                We use digital sampling to reduce material waste during the design process and optimize cutting patterns to maximize fabric usage.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium mb-4">Local Craftsmanship</h3>
              <p className="text-gray-600 mb-4">
                Whenever possible, we work with local artisans and craftspeople who bring generations of knowledge and skill to our products.
              </p>
              <p className="text-gray-600">
                These partnerships help preserve traditional techniques while providing sustainable livelihoods in communities with rich textile heritages.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium mb-4">Transparent Supply Chain</h3>
              <p className="text-gray-600 mb-4">
                We believe in full transparency about where and how our products are made. We're working toward complete traceability across our entire supply chain.
              </p>
              <p className="text-gray-600">
                Our goal is to provide our customers with detailed information about the journey of each garment, from raw material to finished product.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section 
        ref={el => sectionsRef.current[4] = el}
        className="py-16 md:py-24 opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-medium uppercase tracking-wider mb-3 text-gray-500">The People Behind Goodwill</span>
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6">Our Team</h2>
            <p className="text-gray-600 text-lg leading-relaxed text-balance">
              Goodwill is powered by a diverse team of passionate individuals united by our mission to create beautiful, sustainable fashion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" 
                  alt="Emma Berg" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Emma Berg</h3>
              <p className="text-gray-500 mb-4">Founder & Creative Director</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                With over 15 years in sustainable textile design, Emma brings a wealth of expertise and vision to Goodwill.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                  alt="Thomas Lindberg" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Thomas Lindberg</h3>
              <p className="text-gray-500 mb-4">Head of Operations</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Thomas oversees our ethical supply chain and ensures our operations align with our sustainability commitments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80" 
                  alt="Sophia Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-1">Sophia Chen</h3>
              <p className="text-gray-500 mb-4">Design Director</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Sophia leads our design team with a focus on timeless aesthetics and functional versatility.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        ref={el => sectionsRef.current[5] = el}
        className="py-16 md:py-24 bg-black text-white opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-6">Join Our Journey</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed text-balance">
              We're building a community of conscious consumers who believe in the power of thoughtful choices. Stay connected to learn more about our sustainable practices, upcoming collections, and impact initiatives.
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
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
