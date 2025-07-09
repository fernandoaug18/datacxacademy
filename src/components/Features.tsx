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
      icon: Award,
      title: "Certificación Oficial",
      description: "Obtén certificados reconocidos por la industria que validen tus nuevas competencias.",
      color: "text-secondary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-cyber">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5">
            ¿Por qué elegirnos?
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Una Experiencia de Aprendizaje{" "}
            <span className="text-foreground">
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
              className="cyber-card group animate-slide-in-cyber"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center relative">
                {/* Holographic effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="mb-4 flex justify-center relative z-10">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:animate-hologram">
                    <feature.icon className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:neon-text transition-all duration-300 relative z-10">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  {feature.description}
                </p>

                {/* Cyber lines */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;