
import { Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import BlurImage from '../ui/BlurImage';

const Impact = () => {
  return (
    <section id="impacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Nuestro Impacto" 
          subtitle="Cada jornada médica, cada sonrisa recuperada, cada familia atendida es parte de nuestra misión de servir y compartir el amor de Cristo."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-teal-100 rounded-tl-3xl z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-soft">
                <BlurImage
                  src="/lovable-uploads/7c01bba7-adb0-4726-8484-cda127593e87.png"
                  alt="Profesional de la salud atendiendo a un paciente"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-100 rounded-br-3xl z-0"></div>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in-slow">
            <div className="glass-card rounded-xl p-8 border-l-4 border-l-teal-500 relative">
              <Quote className="absolute right-6 top-6 h-12 w-12 text-teal-100" />
              <p className="text-lg mb-6 text-balance italic">
                "Gracias a Recetando Sonrisas, mi hijo pudo recibir los lentes que tanto necesitaba. Ahora puede estudiar mejor y su vida ha cambiado. No solo nos ayudaron con sus ojos, sino que nos dieron esperanza y nos mostraron el amor de Dios."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                    alt="María González" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">María González</div>
                  <div className="text-sm text-muted-foreground">Madre de familia, Comunidad El Naranjo</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="rounded-xl overflow-hidden shadow-sm hover-scale">
                <BlurImage
                  src="/lovable-uploads/7b9b5eac-b06d-4843-95fb-e98ed171c5bd.png"
                  alt="Operativo médico dental"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm hover-scale">
                <BlurImage
                  src="/lovable-uploads/45245862-ff20-4f18-b7c4-d66bdf729f76.png"
                  alt="Atención a niños en una comunidad"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm hover-scale">
                <BlurImage
                  src="/lovable-uploads/3550c269-abc1-40d5-a3a3-90583d00d857.png"
                  alt="Jornada médica en exterior"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
