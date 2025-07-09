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
    <section id="about" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px] opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <Badge variant="outline" className="mb-4 backdrop-blur-sm bg-white/10 border-primary/30">
            ¿Por qué elegirnos?
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Una Experiencia de Aprendizaje{" "}
            <span className="bg-tech-gradient bg-clip-text text-transparent animate-glow-rotate">
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
              className="group hover:shadow-neon transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-white/5 backdrop-blur-sm border-white/10 hover:border-primary/30 animate-slide-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-6 text-center relative z-10">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 group-hover:animate-pulse-glow">
                    <feature.icon className={`h-8 w-8 ${feature.color} group-hover:scale-125 transition-all duration-300`} />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Hover line effect */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;