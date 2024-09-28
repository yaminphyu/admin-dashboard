/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_VERSION: process.env.APP_VERSION,
  }
};

export default nextConfig;
