
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import SectionHeading from "../ui/SectionHeading";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BlurImage } from "../ui/BlurImage";

// Actualizando el arreglo de imágenes con las nuevas fotos proporcionadas
const images = [
  {
    src: "/lovable-uploads/82e827e0-d8ff-459e-9dc5-41e484b5fdc9.png",
    alt: "Atención dental en operativo médico",
    description: "Profesionales dentales brindando atención a un paciente durante un operativo en zona rural."
  },
  {
    src: "/lovable-uploads/0cb4a2fa-8b69-417d-a6df-99fd4cd2d6cc.png",
    alt: "Equipo de voluntarios médicos",
    description: "Grupo de voluntarios y profesionales que participaron en uno de nuestros operativos médicos comunitarios."
  },
  {
    src: "/lovable-uploads/f7c9eca3-3a67-4f19-8422-8d24fadffca4.png",
    alt: "Actividad comunitaria con niños",
    description: "Actividades recreativas y educativas con niños durante un operativo médico en comunidad rural."
  },
  {
    src: "/lovable-uploads/39128060-516f-445d-b0fe-02400077fe29.png",
    alt: "Atención médica pediátrica",
    description: "Médico realizando evaluación de un niño con la ayuda de su madre durante un operativo de salud."
  },
  {
    src: "/lovable-uploads/57cb32b0-7bff-4f43-874e-5effa5b279aa.png",
    alt: "Registro de pacientes",
    description: "Proceso de registro y evaluación inicial de pacientes en uno de nuestros operativos comunitarios."
  },
  {
    src: "/lovable-uploads/fdae6671-0041-4fb2-8a57-a3fe1af2a354.png",
    alt: "Servicio de manicure solidario",
    description: "Servicios complementarios de bienestar ofrecidos durante nuestros operativos médicos."
  },
  {
    src: "/lovable-uploads/21a377fb-f3dc-40cd-9344-8e91b64314fd.png",
    alt: "Atención kinesiológica infantil",
    description: "Atención kinesiológica y evaluación pediátrica durante operativo de salud integral."
  },
  {
    src: "/lovable-uploads/48a1d1ae-3c02-483b-9093-f00c39d5a900.png",
    alt: "Atención médica y dental",
    description: "Dentistas profesionales realizando procedimientos durante un operativo médico gratuito."
  },
  {
    src: "/lovable-uploads/dd006947-ca3e-4fd1-8a19-a4068bd3792a.png",
    alt: "Atención en sala de espera",
    description: "Coordinación y recepción de pacientes en operativo de salud en zona rural."
  },
  {
    src: "/lovable-uploads/e095e693-6b93-49f9-9e04-e270aec768f9.png",
    alt: "Atención médica en consultorio móvil",
    description: "Profesionales de la salud adaptando espacios para brindar atención de calidad en zonas rurales."
  },
  {
    src: "/lovable-uploads/2d05bbe7-77a5-4c97-a30c-e5d3776479ce.png",
    alt: "Atención dental especializada",
    description: "Procedimiento dental realizado por nuestros profesionales voluntarios durante un operativo."
  }
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const openModal = (index: number) => {
    setSelectedImage(index);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };
  
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Galería de Imágenes" 
          subtitle="Momentos capturados durante nuestros operativos médicos en diversas comunidades"
        />
        
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full md:hidden"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
                  <div 
                    className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full"
                    onClick={() => openModal(index)}
                  >
                    <AspectRatio ratio={4/3}>
                      <BlurImage
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>

        {/* Grid view for larger screens */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative w-full">
                <AspectRatio ratio={4/3}>
                  <BlurImage
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal para ver imágenes */}
      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/90">
          {selectedImage !== null && (
            <div className="relative">
              <DialogTitle className="sr-only">
                {images[selectedImage].alt}
              </DialogTitle>
              
              <div className="flex items-center justify-center h-[80vh]">
                <img 
                  src={images[selectedImage].src} 
                  alt={images[selectedImage].alt} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              {/* Descripción */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                <h3 className="text-xl font-medium mb-1">{images[selectedImage].alt}</h3>
                <p className="text-gray-300">{images[selectedImage].description}</p>
              </div>
              
              {/* Controles */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-4 text-white hover:bg-black/50 rounded-full"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/50 rounded-full"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/50 rounded-full"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              
              {/* Indicadores */}
              <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-1.5 pb-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === selectedImage ? 'bg-white scale-110' : 'bg-white/50'
                    }`}
                    aria-label={`Ir a la imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ImageGallery;
