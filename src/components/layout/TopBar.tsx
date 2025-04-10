
import { Facebook, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TopBarProps {
  isTransparent?: boolean;
}

const TopBar = ({ isTransparent = false }: TopBarProps) => {
  return (
    <div className={`${isTransparent ? 'bg-transparent' : 'bg-[#1A272E]'} text-white py-2 px-4 transition-colors duration-300`}>
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
