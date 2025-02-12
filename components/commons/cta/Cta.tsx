"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Footer } from "../footer/Footer";

export const CallToAction = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex flex-col justify-between text-white"
            style={{
                backgroundImage:
                    "url('https://res.cloudinary.com/dnsekavtx/image/upload/v1739297009/6b4c617c-cde2-49ac-92f6-9d23359a8d56.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Content Container */}
            <div className="container mx-auto px-8 py-10 flex-grow text-center flex flex-col justify-center items-center">
                {/* Call-to-Action Title */}
                <motion.h2
                    className="text-5xl md:text-7xl font-extrabold tracking-wide leading-tight drop-shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Ready to explore the <span className="text-blue-400">future?</span>
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-gray-300 mt-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                    Join Ethereal today and discover the next level of decentralized art
                    and finance.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, ease: "backOut", delay: 0.6 }}
                    className="mt-8"
                >
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                        Get Started
                    </button>
                </motion.div>
            </div>

            {/* Footer Section (Sticky at Bottom) */}
            <Footer />
        </section>
    );
};
