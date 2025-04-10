
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="inicio"
      className="relative w-full"
      style={{
        backgroundImage: "url('/lovable-uploads/54c3f6e1-9cf1-4be9-a77f-62a934cfd577.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Full viewport height
        marginTop: "-104px", // Offset by the header height (topbar + navbar)
        paddingTop: "104px" // Add padding to account for the offset
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 lg:py-32 xl:py-40 flex items-center h-full">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Entregamos servicios médicos y esperanza a comunidades rurales
          </h1>
          
          <p className="text-lg text-white/90 mb-8">
            Somos una fundación cristiana que brinda atención médica integral y comparte el amor de Dios en las comunidades más necesitadas.
          </p>
          
          <a
            href="#nosotros"
            className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-gray-800 font-medium py-3 px-6 rounded-full transition-all"
          >
            CONOCE MÁS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
