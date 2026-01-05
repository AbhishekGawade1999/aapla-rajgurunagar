import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  sublabel?: string;
}

const AnimatedCounter = ({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  label,
  sublabel,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center"
    >
      <div className="font-display font-black text-3xl sm:text-4xl lg:text-3xl xl:text-4xl text-gradient mb-2 whitespace-nowrap">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-foreground font-display font-semibold text-lg sm:text-xl">
        {label}
      </div>
      {sublabel && (
        <div className="text-muted-foreground text-sm mt-1">{sublabel}</div>
      )}
    </motion.div>
  );
};

export default AnimatedCounter;
