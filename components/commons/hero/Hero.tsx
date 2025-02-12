"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";

export const Hero = () => {
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const infoRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.3 }
    );

    gsap.fromTo(
      taglineRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out", delay: 0.6 }
    );

    gsap.fromTo(
      infoRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.9 }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 1.2 }
    );
  }, []);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Memperlambat video (50% kecepatan normal)
    }
  }, []);
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center relative text-center px-4">
        {/* Background */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full max-h-screen min-h-[50rem] object-cover z-0"
            src="https://res.cloudinary.com/dnsekavtx/video/upload/v1739331548/15_MV8x_tbenrr.mp4"
            autoPlay
            loop
            muted
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center text-center h-full w-full max-w-4xl">
          {/* Judul */}
          <motion.h1
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-normal tracking-wide text-white drop-shadow-lg max-w-full"
          >
            Discover the future of{" "}
            <span className="text-blue-400">decentralized art and finance</span>
          </motion.h1>

          {/* Deskripsi */}
          <motion.p
            ref={infoRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-lg md:text-xl max-w-xl text-gray-300 drop-shadow mt-2"
          >
            Ethereal is where digital art meets blockchain innovation, enabling
            artists and collectors to connect in a transparent and secure
            ecosystem. Join us to explore limitless possibilities powered by
            Web3.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            ref={buttonRef}
            className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full max-w-md"
          >
            <ConnectButton
              label="Connect To Wallet"
              accountStatus={"address"}
            />
            <button className="py-3 px-6 bg-gray-200 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-300 transition duration-300 w-full sm:w-auto">
              Scroll to discover
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};
