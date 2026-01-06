import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Camera, Megaphone, Calendar, Star, Zap } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Promotional Reels",
    description: "Eye-catching video content that captures attention and drives engagement for your business.",
    highlight: "Most Popular",
  },
  {
    icon: Camera,
    title: "Story Features",
    description: "24-hour spotlight on your brand reaching thousands of local viewers instantly.",
    highlight: null,
  },
  {
    icon: Megaphone,
    title: "Event Coverage",
    description: "Comprehensive coverage of your business events, inaugurations, and special occasions.",
    highlight: null,
  },
  {
    icon: Calendar,
    title: "Monthly Packages",
    description: "Consistent brand visibility with dedicated monthly promotion slots at special rates.",
    highlight: "Best Value",
  },
  {
    icon: Star,
    title: "Business Reviews",
    description: "Authentic reviews and recommendations that build trust with local customers.",
    highlight: null,
  },
  {
    icon: Zap,
    title: "Flash Promotions",
    description: "Quick turnaround promotional content for time-sensitive offers and announcements.",
    highlight: null,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            <span className="text-gradient">Advertisement</span> Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our range of proven marketing solutions designed to boost your local business visibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="glass-card p-6 rounded-2xl hover:bg-muted/30 transition-all duration-300 group relative overflow-hidden"
            >
              {service.highlight && (
                <div className="absolute top-4 right-4 gradient-instagram px-3 py-1 rounded-full text-xs font-semibold">
                  {service.highlight}
                </div>
              )}

              <div className="w-14 h-14 rounded-xl gradient-instagram flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="font-display font-bold text-xl mb-3 text-foreground">
                {service.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
