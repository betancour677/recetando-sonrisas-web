
import React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Stethoscope, 
  Scissors, 
  Eye 
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '../ui/carousel';

// Sample data for upcoming operations
const operations = [
  {
    id: 1,
    title: 'Operativo Médico General',
    description: 'Atención médica general, dental y oftalmológica gratuita para toda la comunidad.',
    date: '15 de Abril, 2024',
    time: '09:00 - 17:00',
    location: 'Centro Comunitario San José',
    services: ['Medicina General', 'Dental', 'Oftalmología']
  },
  {
    id: 2,
    title: 'Operativo Integral Rucahue',
    description: 'Servicios de salud integral con énfasis en salud mental y servicios pediátricos.',
    date: '28 de Mayo, 2024',
    time: '10:00 - 18:00',
    location: 'Iglesia Evangélica de Rucahue',
    services: ['Medicina General', 'Psicología', 'Pediatría', 'Kinesiología']
  },
  {
    id: 3,
    title: 'Jornada de Especialidades',
    description: 'Atención especializada para adultos mayores y personas con movilidad reducida.',
    date: '10 de Junio, 2024',
    time: '08:30 - 16:30',
    location: 'Centro Comunitario Las Vertientes',
    services: ['Geriatría', 'Kinesiología', 'Oftalmología', 'Podología']
  }
];

// Get service icon
const getServiceIcon = (service: string) => {
  switch(service) {
    case 'Medicina General':
      return <Stethoscope className="h-4 w-4" />;
    case 'Dental':
      return <Scissors className="h-4 w-4" />;
    case 'Oftalmología':
      return <Eye className="h-4 w-4" />;
    default:
      return <Stethoscope className="h-4 w-4" />;
  }
};

const UpcomingOperations = () => {
  return (
    <section 
      id="proximos-operativos" 
      className="py-20 bg-gradient-to-br from-blue-50 to-teal-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Próximos Operativos" 
          subtitle="Conoce nuestras próximas visitas a comunidades y los servicios que ofreceremos"
        />
        
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {operations.map((operation) => (
                <CarouselItem key={operation.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="h-full border border-blue-100 shadow-soft overflow-hidden hover-scale">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">{operation.title}</h3>
                      <p className="text-gray-600 mb-4">{operation.description}</p>
                      
                      <div className="space-y-3 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="text-teal-600 h-5 w-5" />
                          <span>{operation.date}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Clock className="text-teal-600 h-5 w-5" />
                          <span>{operation.time}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <MapPin className="text-teal-600 h-5 w-5" />
                          <span>{operation.location}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">Servicios disponibles:</p>
                        <div className="flex flex-wrap gap-2">
                          {operation.services.map((service, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                              {getServiceIcon(service)}
                              <span>{service}</span>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-2 mt-6">
              <CarouselPrevious className="relative static left-auto right-auto translate-y-0" />
              <CarouselNext className="relative static left-auto right-auto translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default UpcomingOperations;
