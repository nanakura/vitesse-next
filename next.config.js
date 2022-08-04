/** @type {import('next').NextConfig} */

const UnoCSS = require('@unocss/webpack').default
const AutoImport = require('unplugin-auto-import/webpack')

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(UnoCSS())
    config.plugins.push(AutoImport({
      imports: ['react']
    }))
    return config
  },
}

module.exports = nextConfig
