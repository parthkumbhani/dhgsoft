/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'img.rocket.new',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: '/careers/internship-program', destination: '/careers/campus-early-careers', permanent: true },
      { source: '/careers/campus-connect', destination: '/careers/campus-early-careers', permanent: true },
    ];
  },
};

export default nextConfig;
