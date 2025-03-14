
import { Facebook, Instagram, Youtube, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Footer links
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Impacto', href: '#impacto' },
    { name: 'Colaborar', href: '#colaborar' },
    { name: 'Contacto', href: '#contacto' },
  ];
  
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'WhatsApp', href: '#', icon: MessageSquare },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/9ec22ea9-5959-46cc-bb1d-c5d450e3a0a5.png" 
                alt="Recetando Sonrisas Logo" 
                className="h-12"
              />
            </div>
            <p className="text-muted-foreground">
              Fundación cristiana comprometida con llevar salud y esperanza a comunidades rurales a través del servicio profesional y el amor de Cristo.
            </p>
            <p className="text-logo-blue font-medium">
              JUNTOS EN LA GRAN COMISIÓN
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={link.name}
                    href={link.href}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:border-logo-blue hover:text-logo-blue transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-medium mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-logo-blue transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-medium mb-4">Contáctanos</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <span>+56 9 1234 5678</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <a href="mailto:contacto@recetandosonrisas.org" className="hover:text-logo-blue transition-colors">
                  contacto@recetandosonrisas.org
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Oficina central: Calle Principal 123, Ciudad</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Fundación Recetando Sonrisas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
