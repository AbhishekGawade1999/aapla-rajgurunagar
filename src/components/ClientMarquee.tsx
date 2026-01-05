import { motion } from "framer-motion";

const clients = [
  "Shree Ganesh Sweets",
  "Khed Motors",
  "Chakan Auto Parts",
  "Rajgurunagar Electronics",
  "Sunshine Restaurant",
  "Premier Jewellers",
  "City Pharmacy",
  "Green Valley Farms",
  "Royal Furniture",
  "Khed Textiles",
  "Chakan Steel Works",
  "Fresh Mart Grocery",
  "Sunrise Hospital",
  "Elite Fitness",
  "Rajguru Builders",
  "Khed Transport",
  "Classic Tailors",
  "Lakshmi Caterers",
  "Sai Auto Services",
  "Mahalaxmi Traders",
];

const ClientMarquee = () => {
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="w-full overflow-hidden py-8">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [0, "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedClients.map((client, index) => (
          <div
            key={index}
            className="glass-card px-6 py-3 rounded-full flex-shrink-0 hover:bg-primary/10 transition-colors duration-300"
          >
            <span className="text-foreground font-medium text-sm sm:text-base">
              {client}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ClientMarquee;
