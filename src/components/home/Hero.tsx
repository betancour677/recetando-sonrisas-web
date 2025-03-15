
import { ArrowRight } from 'lucide-react';

const Hero = () => {
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
                href="#servicios" 
                className="px-6 py-3 bg-logo-blue text-white rounded-full inline-flex items-center space-x-2 hover:bg-logo-blue-600 transition-colors shadow-sm button-glow"
              >
                <span>Conoce nuestros servicios</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="#colaborar" 
                className="px-6 py-3 bg-logo-red-50 text-logo-red-700 border border-logo-red-200 rounded-full inline-flex items-center space-x-2 hover:bg-logo-red-100 transition-colors shadow-sm"
              >
                <span>¿Cómo puedo ayudar?</span>
              </a>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-soft animate-scale-in">
            <img 
              src="/lovable-uploads/47f45428-e2a7-4146-9f2e-c23958298903.png" 
              alt="Equipo médico atendiendo en operativo" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
