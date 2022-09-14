/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins")
const withPWA = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const isDev = process.env.NODE_ENV === "development"

const nextConfig = withPlugins([
  [withBundleAnalyzer],
  [withPWA],
  {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
      removeConsole: !isDev,
    },
    images: {
      deviceSizes: [320, 768, 1204, 1200, 1330, 1920, 2048, 3840],
      formats: ["image/avif", "image/webp"],
      loader: "default",
      domains: ["localhost"],
    },
    pwa: {
      disable: isDev,
      dest: "public",
      runtimeCaching,
      cacheOnFrontEndNav: true,
    },
  },
])

module.exports = nextConfig
