"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      <div className="container mx-auto px-8 mt-5 flex-grow text-center flex flex-col justify-center items-center">
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
        ></motion.div>
      </div>

      {/* Footer Section (Sticky at Bottom) */}
      <footer className="bg-gray-900 text-gray-300 w-full py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">Email: contact@ethereal.com</p>
            <div className="mt-2 flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:text-blue-400 transition">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Get Started
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm">
          © 2025 Ethereal. All rights reserved.
        </div>
      </footer>
    </section>
  );
};
