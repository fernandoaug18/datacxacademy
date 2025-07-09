import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, CheckCircle, Zap } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "CUSTOMER EXPERIENCE EN LA INDUSTRIA 4.0",
      description: "Aprende a transformar la experiencia del cliente en la era digital con herramientas y metodologías avanzadas",
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
    <section id="programs" className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float-slow"></div>
        {/* Tech grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:80px_80px] opacity-5 animate-grid-move"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <Badge variant="secondary" className="mb-4 backdrop-blur-sm bg-secondary/10 border-secondary/30">
            Nuestros Cursos
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Cursos Especializados para tu{" "}
            <span className="bg-tech-gradient bg-clip-text text-transparent animate-neon-pulse">
              Crecimiento Profesional
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Especializaciones estratégicas en Customer Experience, Analytics y desarrollo cognitivo para impulsar tu carrera profesional.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, programIndex) => (
            <Card 
              key={program.id} 
              className="group hover:shadow-glow transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02] bg-white/5 backdrop-blur-md border-white/10 hover:border-primary/30 animate-slide-in-up relative overflow-hidden"
              style={{ animationDelay: `${programIndex * 0.2}s` }}
            >
              {/* Holographic border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
              
              {/* Glowing corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300 font-bold">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  {program.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 relative z-10">
                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <Zap className="w-4 h-4 text-secondary" />
                    Lo que aprenderás:
                  </h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, index) => (
                      <li 
                        key={index} 
                        className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground/90 transition-all duration-300 transform group-hover:translate-x-1"
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        <CheckCircle className="h-4 w-4 text-secondary group-hover:text-primary transition-colors flex-shrink-0" />
                        <span className="group-hover:font-medium transition-all duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full mt-6 relative overflow-hidden group/btn transition-all duration-300 hover:scale-105" 
                  variant={program.id === 2 ? "secondary" : "default"}
                  onClick={() => {
                    let url = "";
                    switch(program.id) {
                      case 1:
                        url = "https://hotmart.com/es/marketplace/productos/customer-experience-en-la-industria-4-0/W82879496W";
                        break;
                      case 2:
                        url = "https://pay.hotmart.com/R40291690T?bid=1752068368220";
                        break;
                      case 3:
                        url = "https://www.udemy.com/course/pensamiento-creativo-herramientas-para-pensar-mas-y-mejor/?referralCode=E597C8F566BB4E8BBDE2";
                        break;
                      case 4:
                        url = "#";
                        break;
                    }
                    if (url !== "#") {
                      window.open(url, "_blank");
                    }
                  }}
                >
                  <span className="relative z-10 font-semibold">Inscribirse Ahora</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </CardContent>
              
              {/* Progress line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Programs;