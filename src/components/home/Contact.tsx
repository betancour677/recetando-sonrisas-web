
import { useState } from 'react';
import { PhoneCall, Mail, MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };
  
  // Contact info
  const contactInfo = [
    {
      icon: PhoneCall,
      title: 'Teléfono',
      details: '+56 9 1234 5678',
      href: 'tel:+56912345678'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'contacto@recetandosonrisas.org',
      href: 'mailto:contacto@recetandosonrisas.org'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      details: 'Oficina central: Calle Principal 123, Ciudad',
      href: '#'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Contáctanos" 
          subtitle="Estamos aquí para responder tus preguntas, recibir tus propuestas de colaboración o coordinar un operativo médico en tu comunidad."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                
                return (
                  <a 
                    key={index}
                    href={item.href}
                    className="glass-card rounded-xl p-4 text-center flex flex-col items-center hover-scale"
                  >
                    <div className="rounded-full bg-teal-100 p-3 inline-flex mb-4">
                      <Icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div className="font-medium mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.details}</div>
                  </a>
                );
              })}
            </div>
            
            <div 
              className="relative rounded-2xl overflow-hidden h-[300px] shadow-sm"
              style={{ 
                background: `url('https://maps.googleapis.com/maps/api/staticmap?center=Santiago,Chile&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7CSantiago,Chile&key=YOUR_API_KEY') no-repeat center/cover`
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200/60">
                <div className="text-center p-4 max-w-xs">
                  <h3 className="text-lg font-medium mb-2">Mapa de ubicación</h3>
                  <p className="text-sm text-muted-foreground">Oficina central: Calle Principal 123, Ciudad</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-slow">
            <div className="glass-card rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-medium mb-6">Formulario de contacto</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-teal-600">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">¡Mensaje enviado!</h4>
                  <p className="text-muted-foreground">
                    Gracias por contactarnos. Te responderemos a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Asunto
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="donaciones">Información sobre donaciones</option>
                        <option value="voluntario">Quiero ser voluntario</option>
                        <option value="iglesia">Representante de iglesia</option>
                        <option value="operativo">Solicitar operativo médico</option>
                        <option value="otro">Otro asunto</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors button-glow disabled:opacity-70"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
