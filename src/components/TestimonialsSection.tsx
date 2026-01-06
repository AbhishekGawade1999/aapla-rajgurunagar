import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rakesh Patil",
    business: "Shree Ganesh Sweets",
    quote: "Our Diwali sales doubled after just one promotional reel. The reach in our local area was incredible!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    business: "Royal Furniture",
    quote: "We received 50+ inquiries within 24 hours of our story feature. Best investment for our showroom launch.",
    rating: 5,
  },
  {
    name: "Amit Deshmukh",
    business: "Khed Motors",
    quote: "Consistent monthly features have made us a household name in the region. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sunita Joshi",
    business: "Green Valley Farms",
    quote: "Our organic produce orders increased by 3x. The local targeting is exactly what we needed.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            <span className="text-gradient">Success</span> Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from local businesses who trusted us with their brand growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="glass-card p-6 sm:p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/30" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div>
                <div className="font-display font-bold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground text-sm">
                  {testimonial.business}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
