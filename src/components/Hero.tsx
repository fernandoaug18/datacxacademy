import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, TrendingUp, Database, Brain, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-futuristic.jpg";

const Hero = () => {
  console.log("Hero component rendering");
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] animate-grid-move opacity-30"></div>
      
      {/* Hero Image Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-hero-gradient opacity-85"></div>
      <div className="absolute inset-0 bg-radial-glow"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-particle-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Tech Icons Floating */}
          <div className="flex justify-center gap-8 mb-8 animate-slide-in-up">
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-float">
              <Database className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-float-slow">
              <Brain className="w-6 h-6 text-secondary" />
            </div>
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-float" style={{ animationDelay: '1s' }}>
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Main Heading with Neon Effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-scale-in">
            <span className="inline-block animate-neon-pulse">Domina el</span>{" "}
            <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent animate-glow-rotate inline-block">
              Futuro
            </span>{" "}
            <span className="inline-block animate-neon-pulse" style={{ animationDelay: '0.5s' }}>
              de los Datos
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            Transforma tu carrera con nuestros programas especializados en{" "}
            <span className="font-semibold text-secondary">Data Science</span> y{" "}
            <span className="font-semibold text-primary">Customer Experience</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-neon"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Explorar Cursos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Ver Demo
            </Button>
          </div>

          {/* Stats or Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-slide-in-up" style={{ animationDelay: '0.9s' }}>
            {[
              { icon: Sparkles, title: "Metodología Innovadora", desc: "Aprende con las últimas técnicas" },
              { icon: Zap, title: "Resultados Rápidos", desc: "Acelera tu crecimiento profesional" },
              { icon: TrendingUp, title: "Carrera Garantizada", desc: "Oportunidades reales de empleo" }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <item.icon className="w-8 h-8 text-secondary mb-3 mx-auto group-hover:animate-pulse" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Floating Elements */}
      <div className="absolute top-1/4 right-10 opacity-20 animate-float">
        <div className="w-32 h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-1/4 left-10 opacity-20 animate-float-slow">
        <div className="w-40 h-40 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-2xl"></div>
      </div>
      <div className="absolute top-1/2 left-1/3 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-24 h-24 bg-gradient-to-br from-primary/40 to-transparent rounded-full blur-lg"></div>
      </div>
    </section>
  );
};

export default Hero;