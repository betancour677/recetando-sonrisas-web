
import SectionHeading from '../ui/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, Eye, BookOpen, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Quiénes Somos" 
          subtitle="Recetando Sonrisas es una fundación cristiana comprometida con llevar atención médica integral y el mensaje de esperanza a comunidades rurales que carecen de acceso a servicios básicos de salud."
        />
        
        {/* Sección de Misión, Visión, Historia y Valores */}
        <div className="mt-10">
          <Tabs defaultValue="mision" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl mx-auto mb-8">
              <TabsTrigger value="mision" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>Misión</span>
              </TabsTrigger>
              <TabsTrigger value="vision" className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>Visión</span>
              </TabsTrigger>
              <TabsTrigger value="historia" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Historia</span>
              </TabsTrigger>
              <TabsTrigger value="valores" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>Valores</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="bg-logo-blue-50 rounded-xl p-6 md:p-10">
              <TabsContent value="mision" className="mt-0">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-medium text-logo-blue-800 mb-4">Nuestra Misión</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nuestra misión es proporcionar servicios médicos de calidad a comunidades rurales y marginadas, 
                    brindando atención integral que combina la excelencia médica con un mensaje de esperanza. 
                    Trabajamos para mejorar la calidad de vida de las personas que no tienen acceso regular a 
                    servicios de salud, mostrando el amor de Cristo a través de nuestro servicio.
                  </p>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h4 className="font-medium text-logo-blue mb-2">Atención de Calidad</h4>
                      <p className="text-sm text-gray-600">Proporcionamos servicios médicos profesionales con los más altos estándares.</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h4 className="font-medium text-logo-blue mb-2">Alcance Rural</h4>
                      <p className="text-sm text-gray-600">Llegamos a comunidades aisladas donde los servicios médicos son escasos o inexistentes.</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h4 className="font-medium text-logo-blue mb-2">Fundamento Cristiano</h4>
                      <p className="text-sm text-gray-600">Nuestro servicio está motivado por el amor de Cristo y el deseo de compartir esperanza.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="vision" className="mt-0">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-medium text-logo-blue-800 mb-4">Nuestra Visión</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Aspiramos a ser un referente en la atención médica cristiana, transformando comunidades 
                    a través del acceso a servicios de salud de calidad. Visualizamos un futuro donde cada 
                    persona, independientemente de su ubicación geográfica o condición económica, pueda 
                    recibir atención médica digna y experimentar la esperanza que viene de Cristo.
                  </p>
                  <div className="mt-6 flex flex-col md:flex-row gap-6 justify-center">
                    <div className="bg-white p-5 rounded-lg shadow-sm flex-1 max-w-xs mx-auto md:mx-0">
                      <h4 className="font-medium text-logo-blue mb-2">Para 2030</h4>
                      <p className="text-sm text-gray-600">Expandir nuestros servicios a cinco países de Latinoamérica, estableciendo operativos permanentes.</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm flex-1 max-w-xs mx-auto md:mx-0">
                      <h4 className="font-medium text-logo-blue mb-2">Sustentabilidad</h4>
                      <p className="text-sm text-gray-600">Desarrollar un modelo de atención sustentable que pueda ser replicado por otras organizaciones.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="historia" className="mt-0">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl font-medium text-logo-blue-800 mb-4 text-center">Nuestra Historia</h3>
                  <div className="space-y-8">
                    <div className="flex gap-4 items-start">
                      <div className="bg-logo-blue text-white font-bold rounded-full w-16 h-16 flex items-center justify-center shrink-0">2014</div>
                      <div>
                        <h4 className="font-medium text-logo-blue">Primeros Pasos</h4>
                        <p className="text-gray-700">
                          El Pastor Juan Martínez, junto con un pequeño grupo de profesionales de la salud, realizó el primer operativo 
                          médico en una pequeña comunidad rural. Lo que comenzó como una iniciativa pequeña reveló la enorme necesidad 
                          de servicios médicos en áreas remotas.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="bg-logo-blue text-white font-bold rounded-full w-16 h-16 flex items-center justify-center shrink-0">2016</div>
                      <div>
                        <h4 className="font-medium text-logo-blue">Formalización</h4>
                        <p className="text-gray-700">
                          Tras dos años de operativos esporádicos, se constituyó oficialmente la Fundación Recetando Sonrisas, 
                          estableciendo una estructura organizativa y ampliando el equipo de profesionales voluntarios.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="bg-logo-blue text-white font-bold rounded-full w-16 h-16 flex items-center justify-center shrink-0">2020</div>
                      <div>
                        <h4 className="font-medium text-logo-blue">Expansión y Crecimiento</h4>
                        <p className="text-gray-700">
                          A pesar de los desafíos de la pandemia, la fundación logró adaptar sus servicios para seguir atendiendo 
                          a comunidades necesitadas, incorporando telemedicina y estrategias de prevención que resultaron en un 
                          crecimiento significativo de nuestro alcance.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="bg-logo-blue text-white font-bold rounded-full w-16 h-16 flex items-center justify-center shrink-0">Hoy</div>
                      <div>
                        <h4 className="font-medium text-logo-blue">Actualidad</h4>
                        <p className="text-gray-700">
                          Actualmente, Recetando Sonrisas realiza operativos médicos regulares en diversas comunidades rurales, 
                          ha establecido alianzas con hospitales y universidades, y cuenta con un equipo de más de 100 profesionales voluntarios 
                          comprometidos con nuestra misión de servir y compartir esperanza.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="valores" className="mt-0">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-medium text-logo-blue-800 mb-4">Nuestros Valores</h3>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    Los valores que guían nuestro trabajo diario y todas nuestras decisiones como organización.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-logo-blue-100 text-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-6 w-6" />
                      </div>
                      <h4 className="font-medium text-logo-blue mb-2">Excelencia</h4>
                      <p className="text-sm text-gray-600">Nos comprometemos a ofrecer servicios médicos de la más alta calidad.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-logo-blue-100 text-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-6 w-6" />
                      </div>
                      <h4 className="font-medium text-logo-blue mb-2">Compasión</h4>
                      <p className="text-sm text-gray-600">Tratamos a cada persona con dignidad, respeto y un genuino interés por su bienestar.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-logo-blue-100 text-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-6 w-6" />
                      </div>
                      <h4 className="font-medium text-logo-blue mb-2">Integridad</h4>
                      <p className="text-sm text-gray-600">Actuamos con honestidad y transparencia en todos nuestros procedimientos.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-logo-blue-100 text-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-6 w-6" />
                      </div>
                      <h4 className="font-medium text-logo-blue mb-2">Servicio</h4>
                      <p className="text-sm text-gray-600">Nos dedicamos a satisfacer las necesidades de los demás antes que las nuestras.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-logo-blue-100 text-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-6 w-6" />
                      </div>
                      <h4 className="font-medium text-logo-blue mb-2">Esperanza</h4>
                      <p className="text-sm text-gray-600">Creemos en un futuro mejor y trabajamos para inspirar esa esperanza en quienes servimos.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-logo-blue-100 text-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-6 w-6" />
                      </div>
                      <h4 className="font-medium text-logo-blue mb-2">Fe</h4>
                      <p className="text-sm text-gray-600">Nuestra fe cristiana es el fundamento de todo lo que hacemos.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
