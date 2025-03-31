/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  trailingSlash: true,  // Add trailing slashes for GitHub Pages compatibility
  // Moved images config inside experimental for Next.js 15 compatibility
  experimental: {
    // Other experimental options can go here
  },
  // Disable image optimization for static export
  unoptimized: true,
  // Used for GitHub Pages deployment with custom domain
  // When deploying to GitHub Pages, this should be '/your-repo-name'
  // For custom domains, this can be '/'
  basePath: '/kavonjon.github.io',
}

module.exports = nextConfig 