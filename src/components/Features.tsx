import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Target, 
  Trophy, 
  Zap, 
  Users, 
  BookOpen,
  Headphones,
  Award
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Metodología Probada",
      description: "Nuestro enfoque pedagógico combina teoría y práctica para un aprendizaje efectivo y duradero.",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Proyectos Reales",
      description: "Trabaja en casos de estudio reales de empresas para aplicar inmediatamente lo aprendido.",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Mentorías 1:1",
      description: "Sesiones personalizadas con expertos de la industria para acelerar tu crecimiento profesional.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Aprendizaje Acelerado",
      description: "Programas intensivos diseñados para maximizar tu tiempo y obtener resultados rápidos.",
      color: "text-secondary"
    },
    {
      icon: BookOpen,
      title: "Contenido Actualizado",
      description: "Material de estudio constantemente actualizado con las últimas tendencias y tecnologías.",
      color: "text-primary"
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      description: "Comunidad activa y soporte técnico disponible para resolver tus dudas en cualquier momento.",
      color: "text-secondary"
    },
    {
      icon: Award,
      title: "Certificación Oficial",
      description: "Obtén certificados reconocidos por la industria que validen tus nuevas competencias.",
      color: "text-primary"
    },
    {
      icon: Trophy,
      title: "Garantía de Empleo",
      description: "Te ayudamos a encontrar trabajo o te devolvemos tu dinero. Ese es nuestro compromiso contigo.",
      color: "text-secondary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            ¿Por qué elegirnos?
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Una Experiencia de Aprendizaje{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Única
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combinamos la mejor tecnología educativa con metodologías comprobadas para ofrecerte una experiencia de aprendizaje excepcional.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-card border-border"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                    <feature.icon className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform`} />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              500+
            </div>
            <div className="text-muted-foreground text-sm">Graduados Exitosos</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              98%
            </div>
            <div className="text-muted-foreground text-sm">Tasa de Satisfacción</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              50+
            </div>
            <div className="text-muted-foreground text-sm">Empresas Asociadas</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              85%
            </div>
            <div className="text-muted-foreground text-sm">Mejora Salarial</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;