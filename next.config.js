/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove standalone output for now
  // output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable telemetry to avoid trace file permission issues
  // Disable React strict mode to avoid double rendering in development
  reactStrictMode: false,
};

module.exports = nextConfig;