import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Cursos",
      links: [
        { name: "Customer Experience Industria 4.0", href: "#" },
        { name: "NPS - Net Promoter Score", href: "#" },
        { name: "Cognotécnicas", href: "#" },
        { name: "People Analytics", href: "#" }
      ]
    },
    {
      title: "Soporte",
      links: [
        { name: "Contacto", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" }
  ];

  return (
    <footer className="bg-gradient-to-br from-background via-primary/5 to-secondary/5 border-t border-primary/20 relative overflow-hidden">
      {/* Futuristic background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[length:100px_100px] opacity-5"></div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4 animate-slide-in-left">
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-primary/30 transition-all duration-300">
                <img 
                  src="/lovable-uploads/47dc23a0-313b-44c7-9495-33e3338bd073.png" 
                  alt="Data y CX Academy" 
                  className="h-8 w-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed text-lg hover:text-foreground/80 transition-colors duration-300">
              Transformamos carreras a través de la educación especializada en Data Science y Customer Experience. 
              Únete a nuestra comunidad de profesionales exitosos.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group cursor-pointer">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </div>
                <span className="group-hover:font-medium">contacto@dataycxacademy.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div 
              key={index} 
              className={`${index === 0 ? "lg:col-span-2" : "lg:col-span-1"} animate-slide-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h4 className="font-semibold text-foreground mb-6 text-lg relative">
                {section.title}
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 animate-slide-in-up">
          <div className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
            © {currentYear} Data y CX Academy. Todos los derechos reservados.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-all duration-300 p-2 rounded-full bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/30 group"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              Política de Privacidad
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300"></div>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              Términos de Uso
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;