/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    compiler: {
      styledComponents: true,
    },
    domains: [
      "localhost",
      "herokuapp.com",
      "res.cloudinary.com",
      "cloudinary.com",
    ],
  },
}

module.exports = nextConfig
