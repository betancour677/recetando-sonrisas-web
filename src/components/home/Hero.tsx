
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="inicio"
      className="relative w-full"
      style={{
        backgroundImage: "url('/lovable-uploads/3550c269-abc1-40d5-a3a3-90583d00d857.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh" // Full viewport height
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
          
          <Button
            variant="outline"
            className="bg-white/20 text-white border-white hover:bg-white hover:text-gray-800 backdrop-blur-sm rounded-full font-medium uppercase"
            asChild
          >
            <a href="#nosotros">CONOCE MÁS</a>
          </Button>
        </div>
      </div>
      
      {/* Call-to-Action Boxes Section */}
      <div className="relative bg-[#0088a9] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Donate Box */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Quiero donar</h3>
              <p className="mb-6">Tu aporte económico nos permite adquirir medicamentos, equipos y financiar los traslados a comunidades remotas.</p>
              <Button
                variant="outline"
                className="mt-auto bg-transparent border-white text-white hover:bg-white hover:text-[#0088a9] rounded-full"
                asChild
              >
                <a href="#donar">Quiero donar</a>
              </Button>
            </div>
            
            {/* Volunteer Box */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Quiero ser voluntario</h3>
              <p className="mb-6">Si eres profesional de la salud o tienes otras habilidades, puedes unirte a nuestros operativos médicos.</p>
              <Button
                variant="outline"
                className="mt-auto bg-transparent border-white text-white hover:bg-white hover:text-[#0088a9] rounded-full"
                asChild
              >
                <a href="#voluntario">Quiero ser voluntario</a>
              </Button>
            </div>
            
            {/* Request Box */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Solicita un operativo</h3>
              <p className="mb-6">Si representas a una iglesia, puedes solicitar un operativo médico para tu comunidad o unirte como iglesia colaboradora.</p>
              <Button
                variant="outline"
                className="mt-auto bg-transparent border-white text-white hover:bg-white hover:text-[#0088a9] rounded-full"
                asChild
              >
                <a href="#solicitar">Solicita un operativo</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
