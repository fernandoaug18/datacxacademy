import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Brain, Target } from "lucide-react";

const Hero = () => {
  console.log("Hero component rendering");
  
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-background via-background/80 to-background"></div>
        <div className="absolute inset-0 bg-hero-gradient opacity-20"></div>
        
        {/* Cyber grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-matrix-rain" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-matrix-rain" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-accent rounded-full animate-matrix-rain" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-matrix-rain" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-secondary rounded-full animate-matrix-rain" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-slide-in-cyber">
            <span className="block mb-2">Domina el Futuro</span>
            <span className="block text-foreground">de los Datos</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed animate-slide-in-cyber" style={{ animationDelay: '0.3s' }}>
            Transforma tu carrera con nuestros programas especializados en 
            <span className="text-foreground font-semibold"> Data Science</span> y <span className="text-foreground font-semibold">Customer Experience</span>
          </p>

          {/* Feature icons */}
          <div className="flex justify-center space-x-6 mb-8 animate-slide-in-cyber" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-4 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300 cyber-glow">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">IA & ML</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-4 rounded-full bg-secondary/10 border border-secondary/20 group-hover:bg-secondary/20 transition-all duration-300 cyber-glow">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <span className="text-sm text-muted-foreground">Analytics</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-4 rounded-full bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-all duration-300 cyber-glow">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Automation</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-4 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300 cyber-glow">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Innovation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating cyber elements */}
      <div className="absolute top-20 right-10 animate-cyber-float">
        <div className="w-32 h-32 border border-primary/20 rounded-lg bg-primary/5 backdrop-blur-sm"></div>
      </div>
      <div className="absolute bottom-20 left-10 animate-cyber-float" style={{ animationDelay: '2s' }}>
        <div className="w-24 h-24 border border-secondary/20 rounded-full bg-secondary/5 backdrop-blur-sm"></div>
      </div>
      <div className="absolute top-1/2 right-20 animate-cyber-float" style={{ animationDelay: '4s' }}>
        <div className="w-16 h-16 border border-accent/20 bg-accent/5 backdrop-blur-sm transform rotate-45"></div>
      </div>
    </section>
  );
};

export default Hero;