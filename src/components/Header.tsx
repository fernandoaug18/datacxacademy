import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "CURSOS", href: "/cursos" },
    { name: "CONTACTO", href: "/contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/20">
      {/* Cyber grid effect */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-slide-in-cyber">
            <div className="relative">
              <img 
                src="/lovable-uploads/47dc23a0-313b-44c7-9495-33e3338bd073.png" 
                alt="Data y CX Academy" 
                className="h-12 w-auto drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-50"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative group text-foreground hover:text-primary transition-all duration-300 font-medium tracking-wider"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 scale-0 group-hover:scale-100 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-md transition-transform duration-300"></div>
                <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative group hover:bg-primary/10 border border-primary/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 rounded-md transition-opacity"></div>
              {isMenuOpen ? <X className="h-6 w-6 relative z-10" /> : <Menu className="h-6 w-6 relative z-10" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary/20 animate-slide-in-cyber">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-effect">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-all duration-300 rounded-md hover:bg-primary/10 border-l-2 border-transparent hover:border-primary font-medium tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;