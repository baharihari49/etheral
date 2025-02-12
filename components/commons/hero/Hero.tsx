"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";

export const Hero = () => {
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const infoRef = useRef(null);
  const buttonRef = useRef(null);
  const discoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animasi untuk teks masuk dengan fade-in dan slide-up
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

  const handleScrollToDiscover = () => {
    if (discoverRef.current) {
      discoverRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="min-h-[50rem]">
        <div className="absolute inset-0 w-full h-screen min-h-[50rem] z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-l"></div>

          <Image
            src="https://res.cloudinary.com/dnsekavtx/image/upload/v1739294648/e19bc300-95f7-48e5-9681-26384d7d871c.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
            className="absolute inset-0"
          />
        </div>

        <div className="container-fluid mx-auto flex flex-col items-center justify-center h-screen relative px-4">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl max-w-7xl pb-5 font-extrabold leading-tight tracking-wide text-white drop-shadow-lg"
            >
              Discover the future of {" "}
              <span className="text-blue-400">decentralized art and finance</span>
            </motion.h1>

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

            <div className="mt-6 flex space-x-4">
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
                transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
                className="py-1 px-6 bg-gray-200 rounded-md text-lg font-semibold shadow-lg hover:bg-gray-300 transition duration-300"
                onClick={handleScrollToDiscover}
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
