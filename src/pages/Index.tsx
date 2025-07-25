import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  console.log("Index component rendering");
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Programs />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
