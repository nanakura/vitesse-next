/** @type {import('next').NextConfig} */

const UnoCSS = require('@unocss/webpack').default

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins = [
      ...config.plugins,
      require('unplugin-auto-import/webpack')({
        imports: [
          'react',
          {
            'usehooks-ts': ['useCounter', 'useDarkMode']
          },
        ],
        dts: true,
      }),
      UnoCSS()
    ]
    return config
  },
}

module.exports = nextConfig
