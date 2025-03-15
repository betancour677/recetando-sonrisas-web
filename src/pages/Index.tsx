
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Impact from '@/components/home/Impact';
import Collaborate from '@/components/home/Collaborate';
import Contact from '@/components/home/Contact';
import UpcomingOperations from '@/components/home/UpcomingOperations';
import Testimonials from '@/components/home/Testimonials';
import ImageGallery from '@/components/home/ImageGallery';

const Index = () => {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    };
    
    document.body.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.body.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <UpcomingOperations />
        <Impact />
        <ImageGallery />
        <Testimonials />
        <Collaborate />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
