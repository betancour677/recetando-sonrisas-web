
import SectionHeading from '../ui/SectionHeading';

const About = () => {
  // Stats for the organization
  const stats = [
    { label: 'Años de servicio', value: '10+' },
    { label: 'Comunidades atendidas', value: '50+' },
    { label: 'Profesionales voluntarios', value: '100+' },
    { label: 'Personas beneficiadas', value: '10.000+' },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Quiénes Somos" 
          subtitle="Recetando Sonrisas es una fundación cristiana comprometida con llevar atención médica integral y el mensaje de esperanza a comunidades rurales que carecen de acceso a servicios básicos de salud."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
          <div className="relative rounded-2xl overflow-hidden h-[400px] lg:h-[500px] animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1591291621086-ffc7d7b8e0e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Equipo médico de Recetando Sonrisas" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-8 animate-fade-in-slow">
            <blockquote className="glass-card rounded-xl p-6 border-l-4 border-l-teal-500 italic text-lg text-balance">
              "Nuestro llamado es servir a los más necesitados, llevando no solo medicina para el cuerpo, sino también para el alma. Creemos que cada persona merece atención digna y de calidad, independientemente de donde viva."
              <footer className="mt-4 font-medium not-italic">
                — Pastor Juan Martínez, Director de Recetando Sonrisas
              </footer>
            </blockquote>
            
            <div className="mt-8">
              <h3 className="text-xl font-medium mb-6">Nuestro impacto:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center glass-card p-4 rounded-lg"
                  >
                    <div className="text-3xl font-serif font-semibold text-teal-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
