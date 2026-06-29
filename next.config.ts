/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this to skip the internal check that causes the html-context error
  experimental: {
    optimizePackageImports: ['next-sanity', 'sanity'],
  },
  transpilePackages: ['next-sanity', 'sanity', '@sanity/ui'],
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
}

export default nextConfig