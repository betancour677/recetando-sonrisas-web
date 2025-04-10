
import React from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { 
  ImageIcon, 
  MessageSquareText, 
  Calendar, 
  LogOut, 
  Home 
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="flex h-screen">
      <Sidebar className="border-r">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Panel de Administración
          </h2>
          <div className="space-y-1">
            <Link to="/">
              <Button variant="ghost" className="w-full justify-start">
                <Home className="mr-2 h-4 w-4" />
                Ir al Sitio Web
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start">
              <ImageIcon className="mr-2 h-4 w-4" />
              Gestionar Galería
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Gestionar Operativos
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <MessageSquareText className="mr-2 h-4 w-4" />
              Gestionar Testimonios
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-logo-red"
              onClick={handleSignOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </Sidebar>
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Bienvenido al Panel de Administración</h1>
        <p className="text-muted-foreground mb-4">
          Selecciona una opción del menú para gestionar los contenidos del sitio web.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 border rounded-lg shadow-sm">
            <ImageIcon className="h-8 w-8 mb-4 text-logo-blue" />
            <h3 className="font-semibold text-lg mb-2">Galería de Imágenes</h3>
            <p className="text-muted-foreground mb-4">Actualiza las imágenes que se muestran en la galería principal.</p>
          </div>
          
          <div className="p-6 border rounded-lg shadow-sm">
            <Calendar className="h-8 w-8 mb-4 text-logo-blue" />
            <h3 className="font-semibold text-lg mb-2">Operativos</h3>
            <p className="text-muted-foreground mb-4">Gestiona la información sobre próximos operativos médicos.</p>
          </div>
          
          <div className="p-6 border rounded-lg shadow-sm">
            <MessageSquareText className="h-8 w-8 mb-4 text-logo-blue" />
            <h3 className="font-semibold text-lg mb-2">Testimonios</h3>
            <p className="text-muted-foreground mb-4">Administra los testimonios que aparecen en el sitio.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
