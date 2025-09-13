/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: [] },
  sassOptions: {
    includePaths: ['.'], // project root
  },
};
module.exports = nextConfig;
