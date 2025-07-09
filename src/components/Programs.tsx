import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, CheckCircle } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "CUSTOMER EXPERIENCE EN LA INDUSTRIA 4.0",
      description: "Aprende a transformar la experiencia del cliente en la era digital con herramientas y metodologías avanzadas",
      duration: "12 semanas",
      students: "250+",
      rating: "4.9",
      price: "$399",
      level: "Intermedio",
      features: [
        "Transformación Digital CX",
        "IoT y Customer Experience",
        "Automatización de Procesos",
        "Analytics en Tiempo Real",
        "Casos de Industria 4.0"
      ],
      color: "bg-primary"
    },
    {
      id: 2,
      title: "NPS - NET PROMOTER SCORE",
      description: "Domina la metodología NPS para medir y mejorar la lealtad de tus clientes de manera efectiva",
      duration: "8 semanas",
      students: "320+",
      rating: "4.8",
      price: "$299",
      level: "Principiante",
      features: [
        "Fundamentos del NPS",
        "Diseño de Encuestas",
        "Análisis e Interpretación",
        "Plan de Acción",
        "Seguimiento y Mejora"
      ],
      color: "bg-secondary"
    },
    {
      id: 3,
      title: "COGNOTÉCNICAS - HERRAMIENTAS PARA PENSAR MÁS Y MEJOR",
      description: "Desarrolla habilidades cognitivas avanzadas para la toma de decisiones y resolución de problemas",
      duration: "10 semanas",
      students: "180+",
      rating: "4.9",
      price: "$349",
      level: "Intermedio",
      features: [
        "Técnicas de Pensamiento Crítico",
        "Metodologías de Resolución",
        "Análisis y Síntesis",
        "Creatividad Aplicada",
        "Casos Prácticos"
      ],
      color: "bg-gradient-to-br from-primary to-secondary"
    },
    {
      id: 4,
      title: "PEOPLE ANALYTICS - ESTRATEGIAS BASADAS EN DATOS PARA LA GESTIÓN DEL TALENTO",
      description: "Aplica analytics avanzado para optimizar la gestión del talento humano en tu organización",
      duration: "14 semanas",
      students: "150+",
      rating: "4.9",
      price: "$449",
      level: "Avanzado",
      features: [
        "Métricas de RRHH",
        "Predictive Analytics",
        "Retention Models",
        "Performance Analytics",
        "Dashboard y Reporting"
      ],
      color: "bg-gradient-to-br from-secondary to-primary"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Nuestros Cursos
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Cursos Especializados para tu{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Crecimiento Profesional
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Especializaciones estratégicas en Customer Experience, Analytics y desarrollo cognitivo para impulsar tu carrera profesional.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card border-border">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="outline" className="text-xs">
                    {program.level}
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{program.price}</div>
                  </div>
                </div>
                
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {program.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {program.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {program.rating}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Lo que aprenderás:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full mt-6" 
                  variant={program.id === 2 ? "secondary" : "default"}
                >
                  Inscribirse Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            ¿No estás seguro cuál programa es para ti?
          </p>
          <Button variant="outline" size="lg">
            Hablar con un Asesor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;