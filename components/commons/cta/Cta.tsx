'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Footer } from "../footer/Footer";

export const CallToAction = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

    return (
        <section
            ref={ref}
            className="h-max-xl pt-32 pb-5 text-white"
            style={{
                backgroundImage: "url('https://res.cloudinary.com/du0tz73ma/image/upload/v1738675679/white-paper-pyramid-with-word-pyramid-it_y5kxkt.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container mx-auto px-8">
                {/* Supporting Content */}
                <motion.h2
                    className="text-5xl lg:text-8xl font-medium mb-4 lg:max-w-3xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Ready to explore the future?
                </motion.h2>
                
                <motion.p
                    className="text-base lg:text-lg mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                    Join Ethereal today and discover the next level of decentralized art and finance.
                </motion.p>
                
                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, ease: "backOut", delay: 0.6 }}
                >
                    <button
                        className="w-max py-1.5 bg-gray-200 rounded-lg px-4 text-lg font-semibold shadow-md hover:shadow-lg transition duration-300 text-black"
                    >
                        Get Started
                    </button>
                </motion.div>
            </div>
            <footer className="px-5 mt-20">
                <Footer />
            </footer>
        </section>
    );
};
