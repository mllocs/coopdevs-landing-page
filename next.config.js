const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://mllocs.github.io/coopdevs-landing-page' : '',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/ca': { page: '/ca' },
      '/es': { page: '/es' },
    }
  }
}
