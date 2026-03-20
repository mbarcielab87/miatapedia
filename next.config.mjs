/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export (Netlify compatible)
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable middleware for static export
  // We'll handle i18n via app router
  trailingSlash: true, // Better compatibility with static hosting
  distDir: 'out', // Output directory for static export
};

export default nextConfig;
