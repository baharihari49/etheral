import "./footer.css";

export const Footer = () => {
    return (
        <footer className="border text-white pb-8 pt-16 footer">
            <div className="container mx-auto px-4">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                        <p>Email: <a href="mailto:contact@ethereal.com" className="">contact@ethereal.com</a></p>
                        <p>Follow us:</p>
                        <div className="flex space-x-4 mt-2">
                            <a href="https://twitter.com/ethereal" target="_blank" rel="noopener noreferrer" className=" hover:underline">Twitter</a>
                            <a href="https://facebook.com/ethereal" target="_blank" rel="noopener noreferrer" className=" hover:underline">Facebook</a>
                            <a href="https://instagram.com/ethereal" target="_blank" rel="noopener noreferrer" className=" hover:underline">Instagram</a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#hero" className="hover:underline">Home</a></li>
                            <li><a href="#features" className="hover:underline">Features</a></li>
                            <li><a href="#cta" className="hover:underline">Get Started</a></li>
                            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Legal Information */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Legal</h4>
                        <p>© 2025 Ethereal. All rights reserved.</p>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
