/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.sneakerjagers.com",
      },
    ],
  },
};

export default nextConfig;
