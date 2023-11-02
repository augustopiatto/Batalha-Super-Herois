/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        port: "",
        pathname: "/gh/akabab/superhero-api@0.3.0/api/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
