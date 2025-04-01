
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gallery, Image, PenSquare, LogOut, Megaphone, MessageSquareQuote } from "lucide-react";

export default function AdminDashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
          <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
            <LogOut size={16} />
            Cerrar Sesión
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="gallery">
          <TabsList className="mb-8 border-b w-full justify-start rounded-none bg-transparent h-auto p-0">
            <TabsTrigger 
              value="gallery" 
              className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-logo-blue rounded-none h-auto bg-transparent data-[state=active]:shadow-none data-[state=active]:text-logo-blue"
            >
              <Gallery className="mr-2 h-4 w-4" />
              Galería de Imágenes
            </TabsTrigger>
            <TabsTrigger 
              value="operations" 
              className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-logo-blue rounded-none h-auto bg-transparent data-[state=active]:shadow-none data-[state=active]:text-logo-blue"
            >
              <Megaphone className="mr-2 h-4 w-4" />
              Operativos
            </TabsTrigger>
            <TabsTrigger 
              value="testimonials" 
              className="py-3 px-4 data-[state=active]:border-b-2 data-[state=active]:border-logo-blue rounded-none h-auto bg-transparent data-[state=active]:shadow-none data-[state=active]:text-logo-blue"
            >
              <MessageSquareQuote className="mr-2 h-4 w-4" />
              Testimonios
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="gallery" className="mt-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Gestión de Galería</h2>
                <Button>
                  <Image className="mr-2 h-4 w-4" />
                  Agregar Imagen
                </Button>
              </div>
              <p className="text-gray-500 mb-4">
                Aquí podrás administrar las imágenes que aparecen en la galería del sitio web.
              </p>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground">
                  Esta funcionalidad se implementará en la próxima fase de desarrollo.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="operations" className="mt-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Gestión de Operativos</h2>
                <Button>
                  <PenSquare className="mr-2 h-4 w-4" />
                  Nuevo Operativo
                </Button>
              </div>
              <p className="text-gray-500 mb-4">
                Administra los próximos operativos médicos que realizará la fundación.
              </p>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground">
                  Esta funcionalidad se implementará en la próxima fase de desarrollo.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="testimonials" className="mt-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Gestión de Testimonios</h2>
                <Button>
                  <PenSquare className="mr-2 h-4 w-4" />
                  Agregar Testimonio
                </Button>
              </div>
              <p className="text-gray-500 mb-4">
                Administra los testimonios de personas que han sido beneficiadas por la fundación.
              </p>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground">
                  Esta funcionalidad se implementará en la próxima fase de desarrollo.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
