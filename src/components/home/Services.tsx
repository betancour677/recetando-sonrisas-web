
import { 
  Stethoscope, 
  Tooth, 
  Eye, 
  Brain, 
  Users, 
  MessageSquare, 
  Activity, 
  Scale
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  // Services data
  const services = [
    {
      title: 'Medicina General',
      description: 'Consultas médicas, diagnósticos iniciales y seguimiento de tratamientos para diversas afecciones.',
      icon: Stethoscope
    },
    {
      title: 'Atención Dental',
      description: 'Diagnósticos, tratamientos preventivos, extracciones y orientación en salud bucal.',
      icon: Tooth
    },
    {
      title: 'Oftalmología',
      description: 'Exámenes de vista, detección de problemas visuales y entrega de lentes según necesidad.',
      icon: Eye
    },
    {
      title: 'Psicología',
      description: 'Apoyo emocional, orientación familiar y acompañamiento en situaciones de crisis.',
      icon: Brain
    },
    {
      title: 'Trabajo Social',
      description: 'Evaluación de necesidades, conexión con recursos comunitarios y seguimiento de casos.',
      icon: Users
    },
    {
      title: 'Fonoaudiología',
      description: 'Evaluación y tratamiento de problemas del habla, lenguaje y comunicación.',
      icon: MessageSquare
    },
    {
      title: 'Kinesiología',
      description: 'Tratamiento de problemas musculares, articulares y rehabilitación física.',
      icon: Activity
    },
    {
      title: 'Asesoría Jurídica',
      description: 'Orientación legal en temas básicos y derivación a especialistas cuando sea necesario.',
      icon: Scale
    }
  ];

  return (
    <section 
      id="servicios" 
      className="py-20"
      style={{
        background: "linear-gradient(135deg, rgba(238, 250, 248, 1) 0%, rgba(247, 251, 255, 1) 100%)"
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Nuestros Servicios" 
          subtitle="Ofrecemos una amplia gama de atenciones profesionales para servir integralmente a las comunidades rurales, atendiendo tanto las necesidades físicas como espirituales."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className="animate-fade-in-slow"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
