"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

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
            { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 1.2 }
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
                {/* Background Video */}
                <video
                    className="absolute inset-0 w-full h-screen min-h-[50rem] object-cover z-0"
                    src="https://res.cloudinary.com/du0tz73ma/video/upload/v1738675808/6916195_Motion_Graphics_Motion_Graphic_3840x2160_fkh0kd.mp4"
                    autoPlay
                    loop
                    muted
                ></video>

                <div className="container mx-auto flex flex-col items-center justify-center h-screen relative">
                    {/* Content Section */}
                    <div className="relative text-center p-8 z-10">
                        <div className="absolute lg:top-3 lg:left-56">
                            <Image
                                className="w-14 lg:w-20"
                                src={'https://res.cloudinary.com/du0tz73ma/image/upload/v1739191858/Bitcoin_pqoza4.gif'}
                                width={100}
                                height={100}
                                alt="Ethereum Logo"
                            />
                        </div>
                        <div className="absolute top-5 right-20 lg:top-10 lg:right-40">
                            <Image
                                className="w-14 lg:w-20"
                                src={'https://res.cloudinary.com/du0tz73ma/image/upload/v1739191849/Iota_yyrgtk.gif'}
                                width={100}
                                height={100}
                                alt="Ethereum Logo"
                            />
                        </div>
                        <div className="absolute bottom-72 left-20 lg:bottom-60 lg:left-40">
                            <Image
                                className="w-14 lg:w-20"
                                src={'https://res.cloudinary.com/du0tz73ma/image/upload/v1739191838/Solana_ygbanr.gif'}
                                width={100}
                                height={100}
                                alt="Ethereum Logo"
                            />
                        </div>
                        {/* Hero Title */}
                        <h1 ref={titleRef} className="text-xl font-bold mb-4">
                            Ethereal
                        </h1>

                        {/* Tagline */}
                        <p ref={taglineRef} className="text-4xl md:text-6xl lg:text-8xl max-w-5xl mb-6">
                            Discover the future of decentralized art and finance
                        </p>

                        {/* About/Info Section */}
                        <p ref={infoRef} className="text-lg max-w-xl mx-auto mb-8">
                            Ethereal is where digital art meets blockchain innovation, enabling artists and collectors to connect in a transparent and secure ecosystem. Join us to explore limitless possibilities powered by Web3.
                        </p>

                        {/* Call-to-Action Buttons */}
                        <div ref={buttonRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center w-max mx-auto">
                            <div className="w-max transition duration-300">
                                <ConnectButton label="Connect To Wallet" accountStatus={"address"} />
                            </div>
                            <button
                                className="w-max py-1.5 bg-gray-200 rounded-lg px-4 text-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
                                onClick={handleScrollToDiscover}
                            >
                                Scroll to discover
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
