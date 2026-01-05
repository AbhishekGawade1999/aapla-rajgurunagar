import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientMarquee from "@/components/ClientMarquee";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Client Marquee Section */}
        <section id="clients" className="py-12 border-y border-border">
          <div className="container mx-auto px-4 mb-6">
            <h3 className="text-center font-display font-bold text-xl sm:text-2xl text-muted-foreground">
              Trusted by <span className="text-gradient">79+ Local Businesses</span>
            </h3>
          </div>
          <ClientMarquee />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
