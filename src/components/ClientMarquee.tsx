

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
  // Only duplicate 2x instead of 4x for better performance
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="w-full overflow-hidden py-8">
      <div
        className="flex gap-8 whitespace-nowrap animate-marquee"
        style={{
          willChange: "transform",
          transform: "translateZ(0)"
        }}
      >
        {duplicatedClients.map((client, index) => (
          <div
            key={index}
            className="glass-card px-6 py-3 rounded-full flex-shrink-0 hover:bg-primary/10 transition-colors duration-200"
          >
            <span className="text-foreground font-medium text-sm sm:text-base">
              {client}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientMarquee;

