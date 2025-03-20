
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col paisley-pattern">
      <div className="w-full bg-india-saffron h-1"></div>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <div className="w-full bg-india-green h-1"></div>
    </div>
  );
};

export default MainLayout;
