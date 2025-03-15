
import { AspectRatio } from "@/components/ui/aspect-ratio";
import SectionHeading from "../ui/SectionHeading";

const images = [
  {
    src: "/lovable-uploads/7b9b5eac-b06d-4843-95fb-e98ed171c5bd.png",
    alt: "Atención dental en operativo médico"
  },
  {
    src: "/lovable-uploads/7c01bba7-adb0-4726-8484-cda127593e87.png",
    alt: "Médico atendiendo a paciente en operativo"
  },
  {
    src: "/lovable-uploads/45245862-ff20-4f18-b7c4-d66bdf729f76.png",
    alt: "Actividades con niños en comunidad"
  },
  {
    src: "/lovable-uploads/3550c269-abc1-40d5-a3a3-90583d00d857.png",
    alt: "Registro de pacientes en operativo"
  },
  {
    src: "/lovable-uploads/4479e669-090c-426a-9b7f-8c657f20e93e.png",
    alt: "Equipo médico trabajando en terreno"
  },
  {
    src: "/lovable-uploads/47f45428-e2a7-4146-9f2e-c23958298903.png",
    alt: "Equipo de voluntarios de Recetando Sonrisas"
  },
  {
    src: "/lovable-uploads/3fc919a8-161a-489e-9822-afe81e3f5500.png",
    alt: "Atención médica a niños en operativo"
  },
  {
    src: "/lovable-uploads/8ac3047a-41ff-4921-8ebc-88a9ec3a395a.png",
    alt: "Registro y atención en comunidad rural"
  }
];

const ImageGallery = () => {
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
              className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
    </section>
  );
};

export default ImageGallery;
