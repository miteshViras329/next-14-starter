/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/*",
      },
    ],
    domains: ["flowbite.s3.amazonaws.com", "randomuser.me"],
  },
};

export default nextConfig;
