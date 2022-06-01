/** @type {import('next').NextConfig} */

const UnoCSS = require('@unocss/webpack').default

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    // config.module.rules.push({
    //   test: /\.(md|mdx)$/,
    //   use: [
    //     options.defaultLoaders.babel,
    //     {
    //       loader: '@mdx-js/loader',
    //       options: pluginOptions.options,
    //     },
    //   ],
    // })
    config.plugins = [
      ...config.plugins,
      // require('unplugin-auto-import/webpack')({
      //   imports: [
      //     'react',
      //     'react-router-dom',
      //     {
      //       'usehooks-ts': ['useCounter', 'useDarkMode']
      //     },
      //   ],
      //   dts: true,
      // }),
      UnoCSS()
    ]
    return config
  },
}

module.exports = nextConfig
