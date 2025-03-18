
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import SectionHeading from "../ui/SectionHeading";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Usando las mismas imágenes del Hero
const images = [
  {
    src: "/lovable-uploads/5804ba12-945d-4b4b-b2ad-b0dca0ddc9d6.png",
    alt: "Médico atendiendo a niño en operativo",
    description: "Nuestros profesionales de la salud brindando atención médica pediátrica durante un operativo."
  },
  {
    src: "/lovable-uploads/14478540-4401-4505-9ea4-8433bd2b2cc6.png",
    alt: "Registro de pacientes en comunidad rural",
    description: "Proceso de registro y evaluación inicial para optimizar la atención en las comunidades rurales."
  },
  {
    src: "/lovable-uploads/33b75294-f6fb-44ae-afca-3a8a6670fd16.png",
    alt: "Atención médica dental en operativo",
    description: "Servicios de odontología brindados en condiciones de campo durante nuestros operativos médicos."
  },
  {
    src: "/lovable-uploads/78521b81-e92b-4aa1-b3da-bb53e7f4d61f.png",
    alt: "Doctora atendiendo a niña en operativo",
    description: "Profesional de la salud realizando evaluación médica a una niña durante un operativo comunitario."
  },
  // Manteniendo algunas imágenes adicionales de la galería original
  {
    src: "/lovable-uploads/7b9b5eac-b06d-4843-95fb-e98ed171c5bd.png",
    alt: "Atención dental en operativo médico",
    description: "Nuestros dentistas voluntarios brindando atención dental gratuita en comunidades rurales."
  },
  {
    src: "/lovable-uploads/3550c269-abc1-40d5-a3a3-90583d00d857.png",
    alt: "Registro de pacientes en operativo",
    description: "Proceso de registro y evaluación inicial para optimizar la atención en cada operativo."
  },
  {
    src: "/lovable-uploads/4479e669-090c-426a-9b7f-8c657f20e93e.png",
    alt: "Equipo médico trabajando en terreno",
    description: "Nuestro equipo médico adaptándose a las condiciones locales para brindar atención de calidad."
  },
  {
    src: "/lovable-uploads/8ac3047a-41ff-4921-8ebc-88a9ec3a395a.png",
    alt: "Registro y atención en comunidad rural",
    description: "Organizando la logística para optimizar la atención a cientos de personas en un solo día."
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative w-full">
                <AspectRatio ratio={4/3}>
                  <img
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
