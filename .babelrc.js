const isDev = process.env.NODE_ENV !== 'production'

const config = {
  presets: ['react-app'],
  plugins: [
    'emotion',
    [
      'babel-plugin-named-asset-import',
      {
        loaderMap: {
          svg: {
            ReactComponent: '@svgr/webpack?-svgo,+ref![path]',
          },
        },
      },
    ],
  ],
}

if (isDev) {
  config.plugins.unshift('react-refresh/babel')
}

module.exports = config
