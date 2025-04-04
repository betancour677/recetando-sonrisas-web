
import { ArrowRight } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from "@/components/ui/carousel";
import { useEffect, useState } from 'react';

const heroImages = [
  {
    src: "/lovable-uploads/5804ba12-945d-4b4b-b2ad-b0dca0ddc9d6.png",
    alt: "Médico atendiendo a niño en operativo"
  },
  {
    src: "/lovable-uploads/14478540-4401-4505-9ea4-8433bd2b2cc6.png",
    alt: "Registro de pacientes en comunidad rural"
  },
  {
    src: "/lovable-uploads/33b75294-f6fb-44ae-afca-3a8a6670fd16.png",
    alt: "Atención médica dental en operativo"
  },
  {
    src: "/lovable-uploads/78521b81-e92b-4aa1-b3da-bb53e7f4d61f.png",
    alt: "Doctora atendiendo a niña en operativo"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center pt-24 pb-16"
      style={{
        background: "linear-gradient(-20deg, rgba(233, 250, 248, 0.7) 0%, rgba(255, 255, 255, 0.7) 100%)"
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute -right-20 top-1/4 w-96 h-96 rounded-full bg-logo-blue-200" />
        <div className="absolute -left-20 top-1/2 w-80 h-80 rounded-full bg-logo-red-100" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 max-w-2xl animate-fade-in-slow">
            <div>
              <div className="inline-block px-3 py-1 mb-4 bg-logo-blue-100 text-logo-blue-700 rounded-full text-sm font-medium animate-fade-in">
                Fundación Cristiana
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-balance leading-tight mb-4 animate-fade-in-slow">
                Llevando salud y esperanza a comunidades rurales
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg text-balance animate-fade-in-slow">
                Somos una fundación cristiana que brinda atención médica integral y comparte el amor de Dios en las comunidades más necesitadas.
              </p>
              <p className="text-lg text-logo-blue font-medium mt-2 animate-fade-in-slow">
                JUNTOS EN LA GRAN COMISIÓN
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <a 
                href="#colaborar" 
                className="px-6 py-3 bg-logo-blue text-white rounded-full inline-flex items-center space-x-2 hover:bg-logo-blue-600 transition-colors shadow-sm button-glow"
              >
                <span>Colaborar</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-soft animate-scale-in">
            {heroImages.map((image, index) => (
              <div 
                key={index} 
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-20"></div>
            
            {/* Indicadores de posición */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white scale-110' : 'bg-white/50'
                  }`}
                  aria-label={`Ir a la imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
