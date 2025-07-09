import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, CheckCircle } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Data Science Fundamentals",
      description: "Aprende los fundamentos de ciencia de datos desde cero hasta nivel intermedio",
      duration: "12 semanas",
      students: "250+",
      rating: "4.9",
      price: "$299",
      level: "Principiante",
      features: [
        "Python para Data Science",
        "Estadística y Probabilidad",
        "Machine Learning Básico",
        "Visualización de Datos",
        "Proyecto Final"
      ],
      color: "bg-primary"
    },
    {
      id: 2,
      title: "Customer Experience Analytics",
      description: "Domina el análisis de experiencia del cliente y métricas de satisfacción",
      duration: "10 semanas",
      students: "180+",
      rating: "4.8",
      price: "$349",
      level: "Intermedio",
      features: [
        "Customer Journey Mapping",
        "NPS y Métricas CX",
        "Análisis de Sentimientos",
        "Design Thinking",
        "Casos de Estudio Reales"
      ],
      color: "bg-secondary"
    },
    {
      id: 3,
      title: "Advanced Analytics & AI",
      description: "Programa avanzado en inteligencia artificial y analytics predictivo",
      duration: "16 semanas",
      students: "120+",
      rating: "4.9",
      price: "$499",
      level: "Avanzado",
      features: [
        "Deep Learning",
        "NLP y Computer Vision",
        "MLOps y Deployment",
        "Big Data Technologies",
        "Capstone Project"
      ],
      color: "bg-gradient-to-br from-primary to-secondary"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Nuestros Programas
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Programas Diseñados para tu{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Éxito
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desde principiantes hasta expertos, tenemos el programa perfecto para impulsar tu carrera en datos y experiencia del cliente.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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