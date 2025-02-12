"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";

interface NavbarProps {
  onScrollToFeatures: () => void;
}

export const Hero: React.FC<NavbarProps> = ({
  onScrollToFeatures,
}) => {
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
      { opacity: 1, scale: 1, duration: 1, ease: "easeInOut", delay: 1.2 }
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
      <section className="min-h-[50rem]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-screen min-h-[50rem] z-0 overflow-hidden">
          {/* Tambahkan efek blur */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-l"></div>

          <video
            ref={videoRef}
            className="absolute inset-0 w-full max-h-screen min-h-[50rem] object-cover z-0"
            src="https://res.cloudinary.com/dnsekavtx/video/upload/v1739331548/15_MV8x_tbenrr.mp4"
            autoPlay
            loop
            muted
          />
        </div>

        <div className="container-fluid mx-auto flex flex-col items-center justify-center h-screen relative px-4">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content Section */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
            {/* **Tetap Menggunakan Judul Asli** */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl max-w-7xl pb-5 font-extrabold leading-tight tracking-wide text-white drop-shadow-lg"
            >
              Discover the future of{" "}
              <span className="text-blue-400">
                decentralized art and finance
              </span>
            </motion.h1>

            {/* **Tetap Menggunakan Deskripsi Asli** */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="text-lg md:text-xl max-w-5xl text-gray-300 drop-shadow"
            >
              Ethereal is where digital art meets blockchain innovation,
              enabling artists and collectors to connect in a transparent and
              secure ecosystem. Join us to explore limitless possibilities
              powered by Web3.
            </motion.p>

            {/* Call-to-Action Buttons */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
              >
                <ConnectButton label="Connect To Wallet" accountStatus={"address"} />
              </motion.div>
              <motion.button
                ref={buttonRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
                className="py-2 px-4 bg-gray-200 rounded-lg text-md font-semibold shadow-lg hover:bg-gray-300 transition duration-300"
                onClick={onScrollToFeatures}
              >
                Scroll to discover
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
