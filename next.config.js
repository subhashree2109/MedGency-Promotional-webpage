/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ⭐ REQUIRED for static export in Next.js 13–15
  output: 'export',

  // (Optional) If you use images from /public, this ensures they work in export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
