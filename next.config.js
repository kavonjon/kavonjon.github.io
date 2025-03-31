/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/kavonjon.github.io',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 