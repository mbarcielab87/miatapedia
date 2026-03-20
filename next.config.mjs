/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For Cloudflare Pages static export
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable middleware for static export
  // We'll handle i18n via app router
};

export default nextConfig;
