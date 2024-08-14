/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      }
    ],
    unoptimized: true, // Disable image optimization for static export
  },
  trailingSlash: true,
  output: "export",
};

module.exports = nextConfig;
