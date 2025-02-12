import "./footer.css";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 w-full py-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="text-sm">Email: contact@ethereal.com</p>
                    <div className="mt-2 flex justify-center md:justify-start gap-4">
                        <a href="#" className="hover:text-blue-400 transition">
                            Twitter
                        </a>
                        <a href="#" className="hover:text-blue-400 transition">
                            Facebook
                        </a>
                        <a href="#" className="hover:text-blue-400 transition">
                            Instagram
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-blue-400 transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400 transition">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400 transition">
                                Get Started
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400 transition">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Legal</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-blue-400 transition">
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-400 transition">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Copyright */}
            <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm">
                © 2025 Ethereal. All rights reserved.
            </div>
        </footer>
    );
};
