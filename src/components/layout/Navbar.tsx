
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "./TopBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "¿Qué Hacemos?", href: "#que-hacemos" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "¿Cómo Ayudar?", href: "#como-ayudar" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      <TopBar isTransparent={!isScrolled} />
      
      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center z-10">
            <div className="flex items-end">
              <div>
                <span className={`text-lg font-normal ${isScrolled ? 'text-[#33a1cc]' : 'text-white'} transition-colors duration-300`}>Recetando</span>
                <h1 className={`text-2xl font-bold leading-none ${isScrolled ? 'text-[#33a1cc]' : 'text-white'} transition-colors duration-300`}>Sonrisas</h1>
              </div>
              <img src="/lovable-uploads/fdae6671-0041-4fb2-8a57-a3fe1af2a354.png" alt="Logo" className="ml-2 h-10" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors text-sm font-medium ${isScrolled ? 'text-gray-700 hover:text-[#33a1cc]' : 'text-white hover:text-white/80'}`}
              >
                {link.name}
              </a>
            ))}
            
            <Button 
              variant="destructive"
              className="rounded-full font-bold px-6 uppercase"
            >
              Dona Aquí
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden focus:outline-none z-10 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white pb-4 px-4 shadow-lg">
            <div className="space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-gray-700 hover:text-[#33a1cc]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <Button 
                  variant="destructive"
                  className="rounded-full font-bold px-6 w-full uppercase"
                >
                  Dona Aquí
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
