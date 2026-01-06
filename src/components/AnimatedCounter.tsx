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
  duration = 1.5,
  label,
  sublabel,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Determine decimal places from the end value
  const decimalPlaces = end % 1 !== 0 ? (end.toString().split('.')[1]?.length || 1) : 0;

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Use easeOutExpo for smoother deceleration at the end
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      // Calculate current value
      const currentValue = easeOutExpo * end;

      // Ensure we hit the exact final value
      if (progress >= 1) {
        setCount(end);
      } else {
        // For decimals, round to appropriate decimal places
        // For integers, use floor to avoid jumping
        if (decimalPlaces > 0) {
          const factor = Math.pow(10, decimalPlaces);
          setCount(Math.round(currentValue * factor) / factor);
        } else {
          setCount(Math.floor(currentValue));
        }
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration, decimalPlaces]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="text-center"
    >
      <div className="font-display font-black text-3xl sm:text-4xl lg:text-3xl xl:text-4xl text-gradient mb-2 whitespace-nowrap">
        {prefix}
        {decimalPlaces > 0 ? count.toFixed(decimalPlaces) : count.toLocaleString()}
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
