import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Cursos = () => {
  const courses = [
    {
      title: "CUSTOMER EXPERIENCE EN LA INDUSTRIA 4.0",
      modules: [
        "Módulo 1: Introducción a CX en la Industria 4.0",
        "Módulo 2: Fundamentos de CX en la Industria 4.0",
        "Módulo 3: Diseño de la experiencia del cliente en la Industria 4.0",
        "Módulo 4: Implementación de la experiencia del cliente en la Industria 4.0",
        "Módulo 5: Medición y evaluación de la experiencia del cliente en la Industria 4.0",
        "Módulo 6: Tendencias y futuro de CX en la Industria 4.0"
      ],
      appendix: "Apéndice: Lista de herramientas / Lecturas recomendadas / Ejemplos de casos de éxito",
      exam: "Examen Final"
    },
    {
      title: "NPS NET PROMOTER SCORE",
      modules: [
        "Módulo 1: Experiencia del cliente y su importancia, Ciclo de vida del cliente, Introducción al NPS, NPS y su origen, Cómo se calcula NPS",
        "Módulo 2: Benchmarks de NPS, Modelos de encuestas, Ventajas y desventajas, Buenas prácticas, Prácticas no recomendadas",
        "Módulo 3: Cómo analizar los datos para la gestión del NPS, ¿A quién debo encuestar?, Importancia de la Tasa de Respuesta",
        "Módulo 4: Identificando causas raíz con NPS, Cerrando el ciclo, Éxito con NPS"
      ],
      exam: "Examen Final"
    },
    {
      title: "PENSAMIENTO CREATIVO - HERRAMIENTAS PARA PENSAR MÁS Y MEJOR",
      modules: [
        "Módulo 1: Introducción al pensamiento creativo",
        "Módulo 2: Herramientas para generar ideas",
        "Módulo 3: Técnicas de resolución de problemas",
        "Módulo 4: Implementación práctica del pensamiento creativo"
      ],
      exam: "Examen Final"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Programas de los cursos
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            ¡Descubre nuestros <span className="font-bold">programas de cursos</span>! Ofrecemos una amplia variedad de cursos en{" "}
            <span className="font-bold">Data y CX</span> diseñados para ayudarte a adquirir habilidades prácticas y avanzar en tu carrera. 
            Explora nuestros programas y descubre cómo podemos ayudarte a{" "}
            <span className="font-bold">alcanzar tus metas profesionales</span>.
          </p>
          
          {/* Illustration */}
          <div className="mt-12 flex justify-center">
            <div className="relative">
              <div className="w-96 h-64 bg-white/10 rounded-lg flex items-center justify-center">
                <div className="text-6xl">💻📚💡</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {courses.map((course, index) => (
              <Card key={index} className="border-2 border-blue-200 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8 text-center">
                    CURSO: {course.title}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {course.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-semibold text-blue-800">
                          {module}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {course.appendix && (
                    <div className="mt-6 bg-green-50 p-4 rounded-lg">
                      <p className="font-semibold text-green-800">
                        {course.appendix}
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-6 bg-yellow-50 p-4 rounded-lg text-center">
                    <p className="font-bold text-yellow-800 text-xl">
                      {course.exam}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cursos;