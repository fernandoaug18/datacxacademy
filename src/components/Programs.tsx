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
    <section id="programs" className="py-20 bg-background relative overflow-hidden">
      {/* Cyber background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        <div className="absolute inset-0 opacity-20">
          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-matrix-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-cyber">
          <Badge variant="secondary" className="mb-4 border-secondary/30 bg-secondary/10 text-secondary">
            Nuestros Cursos
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Cursos Especializados para tu{" "}
            <span className="text-foreground">
              Crecimiento Profesional
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Especializaciones estratégicas en Customer Experience, Analytics y desarrollo cognitivo para impulsar tu carrera profesional.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={program.id} 
              className="cyber-card group animate-slide-in-cyber"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardHeader className="pb-4 relative">
                {/* Program number indicator */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {program.id}
                </div>
                
                <CardTitle className="text-xl mb-2 group-hover:neon-text transition-all duration-300">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {program.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-primary">Lo que aprenderás:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                        style={{ animationDelay: `${(index * 0.3) + (featureIndex * 0.1)}s` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full mt-6 relative overflow-hidden group/btn" 
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
                  <span className="relative z-10">Inscribirse Ahora</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Programs;