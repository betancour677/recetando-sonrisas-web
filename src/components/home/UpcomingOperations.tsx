
import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Stethoscope, 
  Scissors, 
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

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
  const [currentOperationIndex, setCurrentOperationIndex] = useState(0);
  
  // Auto-rotate operations
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOperationIndex((prevIndex) => (prevIndex + 1) % operations.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const currentOperation = operations[currentOperationIndex];
  
  const goToNextOperation = () => {
    setCurrentOperationIndex((prevIndex) => (prevIndex + 1) % operations.length);
  };
  
  const goToPrevOperation = () => {
    setCurrentOperationIndex((prevIndex) => (prevIndex - 1 + operations.length) % operations.length);
  };

  return (
    <section 
      id="proximos-operativos" 
      className="py-8 bg-gradient-to-br from-blue-50 to-teal-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto relative">
          <Card className="border border-blue-100 shadow-soft overflow-hidden animate-fade-in-slow">
            <div className="relative">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{currentOperation.title}</h3>
                <p className="text-gray-600 mb-4">{currentOperation.description}</p>
                
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-teal-600 h-5 w-5" />
                    <span>{currentOperation.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="text-teal-600 h-5 w-5" />
                    <span>{currentOperation.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="text-teal-600 h-5 w-5" />
                    <span>{currentOperation.location}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Servicios disponibles:</p>
                  <div className="flex flex-wrap gap-2">
                    {currentOperation.services.map((service, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                        {getServiceIcon(service)}
                        <span>{service}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
          
          {/* Navigation controls */}
          <div className="flex justify-center gap-2 mt-6">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={goToPrevOperation}
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white border border-blue-100"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Anterior operativo</span>
            </Button>
            
            {/* Indicators */}
            <div className="flex items-center gap-2 px-2">
              {operations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentOperationIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentOperationIndex 
                      ? 'bg-logo-blue scale-110' 
                      : 'bg-logo-blue/30 hover:bg-logo-blue/50'
                  }`}
                  aria-label={`Ir al operativo ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={goToNextOperation}
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white border border-blue-100"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Siguiente operativo</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingOperations;
