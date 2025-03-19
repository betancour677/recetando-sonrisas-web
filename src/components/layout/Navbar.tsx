
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
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

  // Updated navigation links to match the current order of sections
  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Próximos Operativos', href: '#proximos-operativos' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Colaborar', href: '#colaborar' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5',
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo - increased by 40% */}
          <a href="#" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/9ec22ea9-5959-46cc-bb1d-c5d450e3a0a5.png" 
              alt="Recetando Sonrisas Logo" 
              className="h-16" // Increased from h-12 (approx 40% larger)
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-logo-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#donar"
              className="button-glow px-6 py-2.5 bg-logo-red text-white rounded-full text-base font-medium hover:bg-logo-red/90 transition-colors"
            >
              Donar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? (
              <X className="h-7 w-7 text-gray-700" />
            ) : (
              <Menu className="h-7 w-7 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-slide-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg text-gray-700 hover:text-logo-blue py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#donar"
              className="button-glow px-5 py-3 bg-logo-red text-white rounded-full text-center font-medium hover:bg-logo-red/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Donar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
