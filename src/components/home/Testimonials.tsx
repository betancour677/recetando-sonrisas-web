
import React from 'react';
import { Calendar, MessageSquare, Image as ImageIcon, User } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

// Sample data for testimonials
const testimonials = [
  {
    id: 1,
    title: 'Operativo Médico en Comunidad Santa Rosa',
    date: '12 de Marzo, 2024',
    excerpt: 'Más de 200 personas recibieron atención médica gratuita durante nuestra visita a la comunidad de Santa Rosa.',
    content: 'El pasado 12 de marzo, nuestro equipo de voluntarios visitó la comunidad rural de Santa Rosa para brindar atención médica gratuita. Más de 200 personas de todas las edades pudieron acceder a servicios básicos de salud que normalmente no están disponibles en la zona. Se realizaron consultas de medicina general, dental, oftalmológica y psicológica. Además, se entregaron medicamentos gratuitos y se organizaron charlas educativas sobre prevención de enfermedades comunes.',
    author: 'Dra. Carmen Fuentes',
    role: 'Coordinadora de Operativos',
    image: '/lovable-uploads/8ac3047a-41ff-4921-8ebc-88a9ec3a395a.png',
    testimonial: '"Estoy muy agradecida por la atención que recibimos. Mi hijo necesitaba lentes y gracias a ustedes ahora puede ver mejor y seguir con sus estudios. Dios les bendiga por su labor." - María González, madre de familia'
  },
  {
    id: 2,
    title: 'Jornada de Salud Integral en El Naranjo',
    date: '28 de Febrero, 2024',
    excerpt: 'Llevamos servicios médicos, dentales y espirituales a la comunidad de El Naranjo, atendiendo a más de 150 personas.',
    content: 'La comunidad de El Naranjo recibió a nuestro equipo de voluntarios para una jornada completa de atención en salud. Se realizaron 150 atenciones entre medicina general, dental, y oftalmología. Los voluntarios también organizaron actividades recreativas para los niños y compartieron el mensaje de esperanza con todos los asistentes. La iglesia local colaboró activamente en la organización y logística del evento, demostrando el poder del trabajo conjunto en beneficio de la comunidad.',
    author: 'Pastor Roberto Méndez',
    role: 'Iglesia Anfitriona',
    image: '/lovable-uploads/4479e669-090c-426a-9b7f-8c657f20e93e.png',
    testimonial: '"Nunca había tenido la oportunidad de visitar al dentista por los costos. Hoy pude solucionar un problema que tenía hace años. Gracias por venir a nuestra comunidad." - Juan Pérez, agricultor local'
  },
  {
    id: 3,
    title: 'Operativo Especial en Rucalhue',
    date: '15 de Enero, 2024',
    excerpt: 'Realizamos un operativo especial enfocado en adultos mayores en la localidad de Rucalhue, con servicios adaptados a sus necesidades.',
    content: 'En respuesta a las necesidades específicas identificadas en Rucalhue, organizamos un operativo especial enfocado en la atención de adultos mayores. Se realizaron controles de presión arterial, exámenes de vista, evaluaciones de movilidad y consultas médicas generales. Los especialistas en geriatría y kinesiología brindaron asesoramiento personalizado a cada paciente. También se entregaron bastones, lentes y medicamentos a quienes lo necesitaban. La jornada finalizó con un momento de oración y compartir comunitario.',
    author: 'Dra. Isabel Moreno',
    role: 'Geriatra Voluntaria',
    image: '/lovable-uploads/3fc919a8-161a-489e-9822-afe81e3f5500.png',
    testimonial: '"A mis 78 años, ya me había resignado a no ver bien. Gracias a ustedes, ahora puedo leer mi Biblia nuevamente. No tienen idea de lo que significa para mí." - Doña Carmen, 78 años'
  }
];

const Testimonials = () => {
  return (
    <section 
      id="testimonios" 
      className="py-20"
      style={{
        background: "linear-gradient(135deg, rgba(239, 250, 253, 1) 0%, rgba(233, 246, 253, 1) 100%)"
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Testimonios" 
          subtitle="Conoce el impacto de nuestros operativos a través de historias reales y experiencias compartidas"
        />
        
        <div className="mt-12">
          <Tabs defaultValue="1" className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-3 mx-auto mb-8">
              {testimonials.map((testimonial) => (
                <TabsTrigger
                  key={testimonial.id}
                  value={testimonial.id.toString()}
                  className="rounded-full data-[state=active]:bg-logo-blue data-[state=active]:text-white"
                >
                  Operativo {testimonial.id}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {testimonials.map((testimonial) => (
              <TabsContent key={testimonial.id} value={testimonial.id.toString()} className="animate-fade-in">
                <Card className="overflow-hidden border-0 shadow-soft">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-[300px] md:h-full bg-logo-blue-100">
                      <img
                        src={testimonial.image}
                        alt={testimonial.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-logo-blue mb-3">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{testimonial.date}</span>
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-logo-blue-800 mb-4">{testimonial.title}</h3>
                      <p className="text-gray-600 mb-6">{testimonial.content}</p>
                      
                      <blockquote className="border-l-4 border-logo-blue pl-4 italic text-gray-600 mb-6">
                        {testimonial.testimonial}
                      </blockquote>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-logo-blue-100 flex items-center justify-center">
                          <User className="h-5 w-5 text-logo-blue" />
                        </div>
                        <div>
                          <p className="font-medium text-logo-blue-800">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
