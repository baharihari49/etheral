import Image from "next/image";
import { Navbar } from "@/components/commons/navbar/Navbar";
import { Hero } from "@/components/commons/hero/Hero";
import { Features } from "@/components/commons/Features/Features";
import { CallToAction } from "@/components/commons/cta/Cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features/>
      <CallToAction/>
    </>
  );
}
