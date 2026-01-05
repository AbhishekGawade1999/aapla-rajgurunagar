import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    interest: "",
    phone: "",
    message: "",
  });

  // Map internal values to human-readable labels
  const industryLabels: Record<string, string> = {
    retail: "Retail & Shops",
    restaurant: "Restaurant & Food",
    services: "Services",
    healthcare: "Healthcare",
    education: "Education",
    automotive: "Automotive",
    other: "Other",
  };

  const interestLabels: Record<string, string> = {
    reel: "Promotional Reel",
    story: "Story Feature",
    event: "Event Coverage",
    monthly: "Monthly Package",
    review: "Business Review",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const industryLabel = formData.industry ? industryLabels[formData.industry] || formData.industry : "Not specified";
    const interestLabel = formData.interest ? interestLabels[formData.interest] || formData.interest : "Not specified";

    // Build a friendly, personalized message
    let messageParts: string[] = [];
    messageParts.push(`हाय! �😊`);
    messageParts.push(``);
    messageParts.push(`मी *${formData.businessName}* चा आहे. तुमच्या इंस्टाग्राम पेजवरून आलो!`);
    messageParts.push(``);
    messageParts.push(`माझ्या बिझनेसबद्दल थोडं सांगतो:`);
    messageParts.push(`🏪 बिझनेस: ${formData.businessName}`);
    messageParts.push(`🏭 इंडस्ट्री: ${industryLabel}`);
    messageParts.push(`🎯 इंटरेस्ट: ${interestLabel}`);
    messageParts.push(`📱 फोन: ${formData.phone}`);

    if (formData.message && formData.message.trim()) {
      messageParts.push(``);
      messageParts.push(`✍️ थोडं अजून: ${formData.message}`);
    }

    messageParts.push(``);
    messageParts.push(`जाहिरातीबद्दल बोलूया का? �`);

    const message = encodeURIComponent(messageParts.join('\n'));

    window.open(`https://wa.me/917776087319?text=${message}`, "_blank");

    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      businessName: "",
      industry: "",
      interest: "",
      phone: "",
      message: "",
    });
  };

  const handleCall = () => {
    window.location.href = "tel:+917776087319";
  };

  return (
    <section ref={ref} id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            <span className="text-gradient">Start</span> Growing Today
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to reach thousands of local customers? Let's discuss how we can boost your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="font-display font-bold text-2xl mb-6 text-foreground">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <button
                  onClick={handleCall}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full gradient-instagram flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Call Us</div>
                    <div className="text-muted-foreground">+91 98765 43210</div>
                  </div>
                </button>

                <a
                  href="https://wa.me/917776087319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-green-500/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">WhatsApp</div>
                    <div className="text-muted-foreground">Chat with us instantly</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Location</div>
                    <div className="text-muted-foreground">Rajgurunagar, Maharashtra</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Response Time</div>
                    <div className="text-muted-foreground">Within 2 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 sm:p-8 rounded-2xl space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) =>
                    setFormData({ ...formData, businessName: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                  placeholder="Your Business Name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) =>
                      setFormData({ ...formData, industry: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                  >
                    <option value="">Select Industry</option>
                    <option value="retail">Retail & Shops</option>
                    <option value="restaurant">Restaurant & Food</option>
                    <option value="services">Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="automotive">Automotive</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                  >
                    <option value="">Select Service</option>
                    <option value="reel">Promotional Reel</option>
                    <option value="story">Story Feature</option>
                    <option value="event">Event Coverage</option>
                    <option value="monthly">Monthly Package</option>
                    <option value="review">Business Review</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground resize-none"
                  placeholder="Tell us about your business goals..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full gradient-instagram py-4 rounded-xl font-display font-bold text-lg flex items-center justify-center gap-3 shadow-lg glow-primary"
              >
                <Send className="w-5 h-5" />
                Send Inquiry via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
