/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
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
