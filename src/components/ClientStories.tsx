import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Play } from "lucide-react";

// Update this array with your actual client stories
const stories = [
    {
        id: 1,
        name: "Client Review",
        instagramUrl: "https://www.instagram.com/reel/C5prFl9Ntfe/",
    },
    // Add more stories here as needed
];

export default function ClientStories() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    if (stories.length === 0) return null;

    return (
        <section ref={ref} className="py-12 bg-gradient-to-b from-background to-accent/5">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3 }}
                    className="text-center mb-8"
                >
                    <h2 className="font-display font-bold text-2xl sm:text-3xl mb-2">
                        <span className="text-gradient">Client</span> Stories
                    </h2>
                    <p className="text-muted-foreground text-sm">
                        Real reviews from our clients on Instagram
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6">
                    {stories.map((story, index) => (
                        <motion.a
                            key={story.id}
                            href={story.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="group flex flex-col items-center gap-3"
                        >
                            {/* Story Ring */}
                            <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 group-hover:scale-110 transition-transform duration-300">
                                <div className="p-[3px] bg-background rounded-full">
                                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                                        <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                    </div>
                                </div>
                                {/* Play indicator */}
                                <div className="absolute bottom-0 right-0 w-7 h-7 bg-primary rounded-full flex items-center justify-center border-2 border-background shadow-lg">
                                    <Play className="w-3 h-3 text-primary-foreground fill-current" />
                                </div>
                            </div>

                            {/* Label */}
                            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                {story.name}
                            </span>
                        </motion.a>
                    ))}
                </div>

                {/* CTA to view more on Instagram */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="text-center mt-8"
                >
                    <a
                        href="https://www.instagram.com/aapla_rajgurunagar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Instagram className="w-4 h-4" />
                        View more on Instagram
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
