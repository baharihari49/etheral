import type { Metadata } from "next";
import { Orbitron, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import "@rainbow-me/rainbowkit/styles.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"], // Sesuaikan dengan kebutuhan
  variable: "--font-orbitron", // Untuk dipakai di CSS
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ethereal - The Future of Decentralized Art & Finance",
  description:
    "Ethereal is the cutting-edge platform where digital art meets blockchain innovation. Empowering artists and collectors with a transparent, secure, and decentralized ecosystem powered by Web3.",
  keywords:
    "Ethereal, digital art, blockchain, NFT, Web3, decentralized finance, crypto art, NFT marketplace, smart contracts",
  openGraph: {
    title: "Ethereal - The Future of Decentralized Art & Finance",
    description:
      "Explore a world where artists and collectors thrive in a decentralized, secure, and transparent digital art ecosystem powered by blockchain technology.",
    url: "https://Ethereal.baharihari.com",
    type: "website",
    images: [
      {
        url: "https://Ethereal.baharihari.com",
        width: 1200,
        height: 630,
        alt: "Ethereal - Digital Art & Blockchain Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethereal - The Future of Decentralized Art & Finance",
    description:
      "Empowering digital artists and collectors with a secure, transparent Web3-powered ecosystem.",
    images: ["https://Ethereal.baharihari.com"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${poppins.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
