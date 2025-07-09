import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-data-cx.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
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