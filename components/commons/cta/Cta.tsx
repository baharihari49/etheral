'use client'
import { motion } from "framer-motion";
import { Footer } from "../footer/Footer";
import { Button } from "@/components/ui/button"

export const CallToAction = () => {
    return (
        <section
            className="h-max-xl pt-32 pb-5 text-white"
            style={{
                backgroundImage: "url('https://res.cloudinary.com/du0tz73ma/image/upload/v1738675679/white-paper-pyramid-with-word-pyramid-it_y5kxkt.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container mx-auto px-8">
                {/* Supporting Content */}
                <h2 className="text-8xl font-medium mb-4 max-w-3xl">
                    Ready to explore the future?
                </h2>
                <p className="text-lg mb-8">
                    Join Ethereal today and discover the next level of decentralized art and finance.
                </p>
                {/* CTA Button */}
                <Button
                    size={'lg'}
                    // whileHover={{ scale: 1.1 }}
                    // whileTap={{ scale: 0.95 }}
                    className=" bg-white text-black font-semibold shadow-md hover:shadow-lg transition duration-300"
                >
                    Get Started
                </Button>
            </div>
            <footer className="px-5 mt-20">
                <Footer />
            </footer>
        </section>
    );
};
