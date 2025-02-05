import { Button } from "@/components/ui/button";

export const Hero = () => {
    return (
        <>
            <section className="">
                {/* Background Video */}
                <video
                    className="absolute inset-0 w-full max-h-screen min-h-[50rem] object-cover z-0"
                    src="https://res.cloudinary.com/du0tz73ma/video/upload/v1738675808/6916195_Motion_Graphics_Motion_Graphic_3840x2160_fkh0kd.mp4"
                    autoPlay
                    loop
                    muted
                ></video>
                <div className="container mx-auto flex flex-col items-center justify-center h-screen border">
                    {/* Content Section */}
                    <div className="relative text-center p-8 z-10">
                        {/* Hero Title */}
                        <h1 className="text-xl font-bold mb-4 animate-fade-in">
                            Ethereal
                        </h1>

                        {/* Tagline */}
                        <p className="text-8xl max-w-5xl mb-6">
                            Discover the future of decentralized art and finance
                        </p>

                        {/* About/Info Section */}
                        <p className="text-lg max-w-xl mx-auto mb-8">
                            Ethereal is where digital art meets blockchain innovation, enabling artists and collectors to connect in a transparent and secure ecosystem. Join us to explore limitless possibilities powered by Web3.
                        </p>

                        {/* Call-to-Action Buttons */}
                        <div className="space-x-4">
                            <Button className="px-6 py-3 font-semibold shadow-md hover:shadow-lg transition duration-300">
                                Connect Wallet
                            </Button>
                            <Button
                                variant={"secondary"}
                                className="px-6 py-3 font-semibold shadow-md hover:shadow-lg transition duration-300"
                            >
                                Scroll to discover
                            </Button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};
