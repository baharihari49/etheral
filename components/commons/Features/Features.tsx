"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Features = () => {
  const features = [
    {
      id: 1,
      icon: (
        <Image
          src="https://res.cloudinary.com/dnsekavtx/image/upload/v1739295785/acdb9795-da9e-403a-a234-9a7701fb5893.png"
          alt="Decentralized Platform"
          width={50}
          height={50}
          className="mx-auto mt-4 ml-5 drop-shadow-lg"
        />
      ),
      title: "Decentralized & Secure",
      description:
        "Experience true ownership and secure transactions powered by blockchain. No middlemen, no limits—just freedom.",
    },
    {
      id: 2,
      icon: (
        <Image
          src="https://res.cloudinary.com/dnsekavtx/image/upload/v1739295806/d0e429a8-4559-497c-af02-db32376f47eb.png"
          alt="Seamless Wallet Integration"
          width={50}
          height={50}
          className="mx-auto mt-4 ml-4 drop-shadow-lg"
        />
      ),
      title: "Seamless Wallet Integration",
      description:
        "Connect your wallet in seconds and take full control of your digital assets with ease and security.",
    },
    {
      id: 3,
      icon: (
        <Image
          src="https://res.cloudinary.com/dnsekavtx/image/upload/v1739295815/b8945a5a-63a8-4b84-b9dd-20731a6e8df0.png"
          alt="Creative Freedom"
          width={50}
          height={50}
          className="mx-auto mt-4 ml-4 drop-shadow-lg"
        />
      ),
      title: "Creative Freedom",
      description:
        "Monetize your art effortlessly and engage with collectors worldwide in an open and limitless digital space.",
    },
    {
      id: 4,
      icon: (
        <Image
          src="https://res.cloudinary.com/dnsekavtx/image/upload/v1739295817/a8dde835-49b9-4093-8353-c0b80e75e6a1.png"
          alt="Smart Contract Automation"
          width={50}
          height={50}
          className="mx-auto mt-4 ml-4 drop-shadow-lg"
        />
      ),
      title: "Smart Contract Automation",
      description:
        "Automate royalty payments and ensure trustless transactions with blockchain-powered smart contracts.",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <p className="text-blue-400 text-lg font-semibold tracking-wide uppercase mb-3">
          Why Choose Us
        </p>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-12">
          Why Choose Our{" "}
          <span className="text-blue-500">Ethereal Platform</span>
        </h2>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-gray-900  p-8 rounded-2xl shadow-lg transition duration-300 hover:bg-gray-800 hover:scale-105 text-center flex flex-col items-center"
              style={{ border: "1px solid #1e2731" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div
                className="mb-5"
                style={{
                  width: "90px",
                  height: "90px",
                  background: "rgba(255, 255, 255, 0.07)",
                  border: "4px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "50%",
                  transition: ".3s ease-in-out",
                }}
              >
                {feature.icon}
              </div>
              <h2 className="text-2xl font-semibold mb-3">{feature.title}</h2>
              <p className="text-gray-300 text-base">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
