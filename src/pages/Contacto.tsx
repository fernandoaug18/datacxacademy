import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    consulta: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-400 to-red-500 text-white py-20 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Dudas y/o consultas?
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Si tienes dudas o consultas sobre nuestros cursos de Data y CX, no dudes en preguntar. 
            Estamos aquí para ayudarte y asegurarnos de que encuentres el curso que mejor se adapte a 
            tus necesidades y objetivos. ¡Estamos ansiosos por ayudarte a avanzar en tu carrera!
          </p>
          
          {/* Illustration */}
          <div className="mt-12 flex justify-center">
            <div className="relative">
              <div className="w-96 h-64 bg-white/10 rounded-lg flex items-center justify-center">
                <div className="text-6xl">📱💻📊</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Info */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
                Escríbenos
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                y te responderemos lo antes posible.
              </p>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3 bg-blue-50 p-4 rounded-lg">
                <Mail className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-medium text-blue-600">
                  contacto@dataycxacademy.com
                </span>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="nombre"
                    placeholder="Nombre *"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="correo"
                    placeholder="Correo electrónico *"
                    value={formData.correo}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="text"
                    name="asunto"
                    placeholder="Asunto"
                    value={formData.asunto}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="consulta"
                    placeholder="Consulta"
                    value={formData.consulta}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3"
                >
                  ENVIAR MENSAJE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;