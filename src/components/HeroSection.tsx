import { motion } from "framer-motion";
import { Phone, MessageCircle, TrendingUp } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const HeroSection = () => {
  const handleCall = () => {
    window.location.href = "tel:+917776087319";
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in advertising with Aapl Rajgurunagar. Please share details about your packages."
    );
    window.open(`https://wa.me/917776087319?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Rajgurunagar's Trusted Digital Voice
            </span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            <span className="text-foreground">Aapl</span>{" "}
            <span className="text-gradient">Rajgurunagar</span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Amplify your business with the most trusted local media voice.
            Reach <span className="text-primary font-semibold">110K+ engaged followers</span> in Rajgurunagar, Khed & Chakan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className="gradient-instagram px-8 py-4 rounded-full font-display font-bold text-lg flex items-center gap-3 shadow-lg glow-primary transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Grow Your Business - Call Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="glass-card px-8 py-4 rounded-full font-display font-semibold text-lg flex items-center gap-3 hover:bg-muted/50 transition-all duration-300 border border-border"
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
              WhatsApp Inquiry
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="glass-card rounded-3xl p-6 sm:p-10 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            <AnimatedCounter
              end={110000}
              suffix="+"
              label="Followers"
              sublabel="Community Authority"
            />
            <AnimatedCounter
              end={10}
              suffix="M+"
              label="Monthly Reach"
              sublabel="Brand Exposure"
            />
            <AnimatedCounter
              end={350}
              suffix="M+"
              label="Total Views"
              sublabel="Content Performance"
            />
            <AnimatedCounter
              end={79}
              suffix="+"
              label="Clients Served"
              sublabel="Business Experience"
            />
            <div className="col-span-2 lg:col-span-1 flex flex-col items-center justify-center">
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-3xl xl:text-4xl text-gradient mb-2 whitespace-nowrap">
                80%
              </div>
              <div className="text-foreground font-display font-semibold text-lg sm:text-xl text-center">
                Local Audience
              </div>
              <div className="text-muted-foreground text-sm mt-1 text-center">
                Rajgurunagar/Khed/Chakan
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
