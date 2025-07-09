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
      title: "Programas",
      links: [
        { name: "Data Science Fundamentals", href: "#" },
        { name: "Customer Experience Analytics", href: "#" },
        { name: "Advanced Analytics & AI", href: "#" },
        { name: "Certificaciones", href: "#" }
      ]
    },
    {
      title: "Recursos",
      links: [
        { name: "Blog", href: "#" },
        { name: "Documentación", href: "#" },
        { name: "Casos de Estudio", href: "#" },
        { name: "Webinars", href: "#" }
      ]
    },
    {
      title: "Soporte",
      links: [
        { name: "Centro de Ayuda", href: "#" },
        { name: "Contacto", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Comunidad", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Mantente al día con las últimas tendencias
            </h3>
            <p className="text-muted-foreground mb-6">
              Recibe contenido exclusivo, tips y noticias sobre Data Science y Customer Experience directamente en tu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Tu email..." 
                className="flex-1"
              />
              <Button variant="hero" className="group">
                Suscribirse
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-hero-gradient p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Data y CX Academy</h2>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transformamos carreras a través de la educación especializada en Data Science y Customer Experience. 
              Únete a nuestra comunidad de profesionales exitosos.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contacto@datacxacademy.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          
          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;