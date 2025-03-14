
import { DollarSign, Users, Building } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const Collaborate = () => {
  // Collaboration options
  const options = [
    {
      id: 1,
      title: 'Dona',
      description: 'Tu aporte económico nos permite adquirir medicamentos, equipos y financiar los traslados a comunidades remotas.',
      icon: DollarSign,
      action: {
        text: 'Hacer una donación',
        href: '#donar'
      }
    },
    {
      id: 2,
      title: 'Voluntariado',
      description: 'Si eres profesional de la salud o tienes otras habilidades, puedes unirte a nuestros operativos médicos.',
      icon: Users,
      action: {
        text: 'Ser voluntario',
        href: '#contacto'
      }
    },
    {
      id: 3,
      title: 'Iglesias Asociadas',
      description: 'Si representas a una iglesia, puedes solicitar un operativo médico para tu comunidad o unirte como iglesia colaboradora.',
      icon: Building,
      action: {
        text: 'Solicitar operativo',
        href: '#contacto'
      }
    }
  ];

  return (
    <section 
      id="colaborar" 
      className="py-20"
      style={{
        background: "linear-gradient(135deg, rgba(239, 250, 253, 1) 0%, rgba(247, 251, 255, 1) 100%)"
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="¿Cómo puedes colaborar?" 
          subtitle="Tu apoyo, grande o pequeño, puede marcar la diferencia en la vida de muchas personas. Hay muchas formas de ser parte de esta misión."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {options.map((option) => {
            const Icon = option.icon;
            
            return (
              <div 
                key={option.id} 
                className="glass-card rounded-xl p-8 text-center flex flex-col items-center animate-fade-in-slow hover-scale"
              >
                <div className="rounded-full bg-logo-blue-100 p-4 inline-flex mb-6">
                  <Icon className="h-8 w-8 text-logo-blue" />
                </div>
                <div className="text-2xl font-medium mb-2">
                  {option.id}. {option.title}
                </div>
                <p className="text-muted-foreground mb-6">
                  {option.description}
                </p>
                <a 
                  href={option.action.href}
                  className="mt-auto px-6 py-3 bg-logo-red text-white rounded-full inline-flex items-center justify-center hover:bg-logo-red-700 transition-colors w-full max-w-xs button-glow"
                >
                  {option.action.text}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
