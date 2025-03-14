
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { MoveLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-100">
            <span className="text-3xl font-serif font-semibold text-teal-600">404</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Página no encontrada</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          <a
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors button-glow"
          >
            <MoveLeft className="h-5 w-5" />
            <span>Volver al inicio</span>
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
