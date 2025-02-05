'use client'
import { motion } from "framer-motion";
import SecuritySharpIcon from '@mui/icons-material/SecuritySharp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Image from "next/image";

export const Features = () => {
    const features = [
        {
            id: 1,
            icon: (
                <Image
                    src="https://res.cloudinary.com/du0tz73ma/image/upload/v1738685872/bitcoin_1246580_umjaub.png"
                    alt="Decentralized Platform"
                    width={100}
                    height={100}
                />
            ),
            title: "Decentralized Platform",
            description: "Empowering users with secure, transparent transactions through blockchain technology.",
        },
        {
            id: 2,
            icon: (
               <Image
                    src={"https://res.cloudinary.com/du0tz73ma/image/upload/v1738686093/crypto-wallet_16182059_a0v5jl.png"}
                    alt="Seamless Wallet Integration"
                    width={100}
                    height={100}
               />
            ),
            title: "Seamless Wallet Integration",
            description: "Connect your wallet effortlessly and manage assets with ease.",
        },
        {
            id: 3,
            icon: (
                <Image
                    src={"https://res.cloudinary.com/du0tz73ma/image/upload/v1738686256/moon_16346898_bo05uk.png"}
                    alt="Creative Freedom"
                    width={100}
                    height={100}
               />
            ),
            title: "Creative Freedom",
            description: "A space where artists can innovate and monetize their work securely.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    };

    return (
        <section className="container mx-auto py-16">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {features.map((feature) => (
                    <motion.div
                        key={feature.id}
                        className="bg-white p-6 rounded-lg shadow-lg text-start border"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-6xl font-medium mb-4">{feature.title}</h3>
                        <p className="text-gray-600 text-lg">{feature.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
