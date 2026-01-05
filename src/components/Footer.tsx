import { Instagram, Facebook, Youtube, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-instagram flex items-center justify-center">
              <Instagram className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="font-display font-bold text-lg">
              <span className="text-foreground">आपलं</span>{" "}
              <span className="text-gradient">Rajgurunagar</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/aaplrajgurunagar/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Instagram className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Facebook className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-colors"
            >
              <Youtube className="w-5 h-5 text-foreground" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in Rajgurunagar
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
