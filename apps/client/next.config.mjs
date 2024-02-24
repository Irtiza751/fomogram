/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://ui-avatars.com/api/
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        port: "",
        pathname: "/api/**",
      },
    ],
  },
};

export default nextConfig;
