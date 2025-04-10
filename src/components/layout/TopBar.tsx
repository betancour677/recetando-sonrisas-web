
import { Facebook, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`text-white py-2 px-4 transition-all duration-300 ${
        isScrolled ? 'bg-[#1A272E]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <div className="hidden sm:flex items-center gap-2">
            <Mail size={16} />
            <span className="text-sm">Contáctanos: contacto@recetando.cl</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm">
          <span className="hidden sm:inline">English</span>
          <span className="hidden sm:inline">|</span>
          <span>Fundación Recetando</span>
          <span>|</span>
          <span>Kitwana</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
