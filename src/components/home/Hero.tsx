
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
        <div className="absolute -right-20 top-1/4 w-96 h-96 rounded-full bg-teal-200" />
        <div className="absolute -left-20 top-1/2 w-80 h-80 rounded-full bg-blue-200" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 max-w-2xl animate-fade-in-slow">
            <div>
              <div className="inline-block px-3 py-1 mb-4 bg-teal-100 text-teal-800 rounded-full text-sm font-medium animate-fade-in">
                Fundación Cristiana
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-balance leading-tight mb-4 animate-fade-in-slow">
                Llevando salud y esperanza a comunidades rurales
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg text-balance animate-fade-in-slow">
                Somos una fundación cristiana que brinda atención médica integral y comparte el amor de Dios en las comunidades más necesitadas.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <a 
                href="#servicios" 
                className="px-6 py-3 bg-teal-600 text-white rounded-full inline-flex items-center space-x-2 hover:bg-teal-700 transition-colors shadow-sm button-glow"
              >
                <span>Conoce nuestros servicios</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="#colaborar" 
                className="px-6 py-3 bg-white text-gray-800 border border-gray-200 rounded-full inline-flex items-center space-x-2 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <span>¿Cómo puedo ayudar?</span>
              </a>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-soft animate-scale-in">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Personal médico atendiendo en comunidad rural" 
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
