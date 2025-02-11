'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
    onScrollToDiscover: () => void;
    onScrollToFeatures: () => void;
    onScrollToCTA: () => void;
    onScrollToHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToDiscover, onScrollToFeatures, onScrollToCTA, onScrollToHome }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.div 
            initial={{ y: -100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
        >
            <nav className="flex justify-between items-center p-4 container mx-auto relative">
                <p className="text-3xl font-bold">Etheral</p>
                
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-4">
                    <li className="cursor-pointer" onClick={onScrollToHome}> Home</li>
                    <li className="cursor-pointer" onClick={onScrollToFeatures}>Features</li>
                    <li className="cursor-pointer" onClick={onScrollToCTA}>Call To Action</li>
                </ul>
                <ConnectButton />
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden absolute top-full left-0 w-full bg-white shadow-md p-4"
                >
                    <ul className="flex flex-col gap-4 text-center">
                        <li className="py-2 cursor-pointer" onClick={onScrollToFeatures}>Features</li>
                        <li className="py-2 cursor-pointer" onClick={onScrollToCTA}>Call To Action</li>
                        <ConnectButton />
                    </ul>
                </motion.div>
            )}
        </motion.div>
    );
}
