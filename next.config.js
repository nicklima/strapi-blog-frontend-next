/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    deviceSizes: [320, 768, 1204, 1200, 1330, 1920, 2048, 3840],
    formats: ["image/avif", "image/webp"],
    loader: "default",
    domains: ["localhost", "res.cloudinary.com", "cloudinary.com"],
  },
}

module.exports = nextConfig
