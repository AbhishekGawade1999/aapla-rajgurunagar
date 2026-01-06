import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+917776087319";
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Aapl Rajgurunagar Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <div className="font-display font-bold text-lg sm:text-xl">
              <span className="text-foreground">Aapl</span>{" "}
              <span className="text-gradient">Rajgurunagar</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("clients")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className="hidden sm:flex gradient-instagram px-4 py-2 rounded-full font-semibold text-sm items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {
                  opacity: 0,
                  height: 0,
                  transition: {
                    duration: 0.15,
                    when: "afterChildren"
                  }
                },
                visible: {
                  opacity: 1,
                  height: "auto",
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                    when: "beforeChildren",
                    staggerChildren: 0.05
                  }
                }
              }}
              className="md:hidden py-4 border-t border-border/50 overflow-hidden"
            >
              <nav className="flex flex-col gap-3">
                {[
                  { id: "services", label: "Services" },
                  { id: "clients", label: "Clients" },
                  { id: "testimonials", label: "Reviews" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  onClick={handleCall}
                  className="gradient-instagram px-4 py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 mt-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
