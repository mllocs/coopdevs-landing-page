const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.PATH_PREFIX': prod ? 'https://mllocs.github.io/coopdevs-landing-page' : '',
}
