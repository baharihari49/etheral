'use client'

import { useRef } from "react";
import { Navbar } from "@/components/commons/navbar/Navbar";
import { Hero } from "@/components/commons/hero/Hero";
import { Features } from "@/components/commons/Features/Features";
import { CallToAction } from "@/components/commons/cta/Cta";

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);


  const handleScrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToCTA = () => {
    if (ctaRef.current) {
      ctaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <Navbar
        onScrollToFeatures={handleScrollToFeatures}
        onScrollToCTA={handleScrollToCTA}
        onScrollToHome={handleScrollToHome}
      />
      <div ref={homeRef}>
        <Hero 
          onScrollToFeatures={handleScrollToFeatures}
        />
      </div>

      {/* Gunakan div dengan ref agar scroll bekerja */}
      <div ref={featuresRef}>
        <Features />
      </div>

      <div ref={ctaRef}>
        <CallToAction />
      </div>
    </>
  );
}
