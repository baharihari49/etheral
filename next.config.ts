/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
          pathname: "/du0tz73ma/image/upload/**", // Tetap biarkan ini
        },
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
          pathname: "/dnsekavtx/image/upload/**", // Tambahkan ini
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  