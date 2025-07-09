import { Button } from "@/components/ui/button";
import { ArrowRight, Play, BarChart3, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-data-cx.jpg";

const Hero = () => {
  const stats = [
    { icon: BarChart3, value: "500+", label: "Estudiantes" },
    { icon: Users, value: "98%", label: "Tasa de Satisfacción" },
    { icon: TrendingUp, value: "85%", label: "Mejora Profesional" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Data and CX Academy" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Domina el{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Futuro
            </span>{" "}
            de los Datos
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Transforma tu carrera con nuestros programas especializados en 
            <strong> Data Science</strong> y <strong>Customer Experience</strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="glass" size="lg" className="group">
              Ver Programas
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Play className="mr-2 h-5 w-5" />
              Ver Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-yellow-400 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 opacity-20">
        <div className="w-32 h-32 bg-white/10 rounded-full animate-float"></div>
      </div>
      <div className="absolute bottom-20 left-10 opacity-20">
        <div className="w-24 h-24 bg-yellow-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default Hero;