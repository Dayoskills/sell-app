// Import bundle analyzer to enable compression
const withBundleAnalyzer = require('@next/bundle-analyzer')

module.exports = withBundleAnalyzer({
  compress: true,  

  // Base path for production
  basePath: '/production-path',

  // Asset prefix for CDN
  assetPrefix: 'https://mycdn.com',

  images: {
    domains: ['res.cloudinary.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], 
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: '/_next/image',
    loader: 'default'
  },

  // Custom headers  
  headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains', 
          }
        ]
      }
    ]
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: false
      }
    ]
  } 
})
