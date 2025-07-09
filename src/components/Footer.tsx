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
    <footer className="bg-card border-t border-primary/20 relative overflow-hidden">
      {/* Cyber background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4 animate-slide-in-cyber">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <img 
                  src="/lovable-uploads/47dc23a0-313b-44c7-9495-33e3338bd073.png" 
                  alt="Data y CX Academy" 
                  className="h-12 w-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl opacity-50"></div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed text-lg">
              Transformamos carreras a través de la educación especializada en Data Science y Customer Experience. 
              Únete a nuestra comunidad de profesionales exitosos.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground group hover:text-primary transition-colors">
                <div className="p-2 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all">
                  <Mail className="h-4 w-4" />
                </div>
                <span>contacto@dataycxacademy.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div 
              key={index} 
              className={`${index === 0 ? "lg:col-span-2" : "lg:col-span-1"} animate-slide-in-cyber`}
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
            >
              <h4 className="font-semibold text-foreground mb-4 relative">
                {section.title}
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 relative group inline-block"
                    >
                      <span className="relative z-10">{link.name}</span>
                      <div className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-primary/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Data y CX Academy. Todos los derechos reservados.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-2 rounded-full bg-primary/10 border border-primary/20 text-muted-foreground hover:text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 cyber-glow hover:scale-110"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors relative group">
              <span>Política de Privacidad</span>
              <div className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300"></div>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors relative group">
              <span>Términos de Uso</span>
              <div className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;