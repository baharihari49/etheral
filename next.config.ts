/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "res.cloudinary.com",
              pathname: "/du0tz73ma/image/upload/**", // Sesuaikan path jika perlu
          },
      ],
  },
};

module.exports = nextConfig;
