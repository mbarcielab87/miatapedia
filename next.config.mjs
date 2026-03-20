/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export only for production builds
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better compatibility with static hosting
  distDir: 'out', // Output directory for static export
};

export default nextConfig;
