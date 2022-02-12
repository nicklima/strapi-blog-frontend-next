/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: [
      "localhost",
      "herokuapp.com",
      "res.cloudinary.com",
      "cloudinary.com",
    ],
  },
}

module.exports = nextConfig
