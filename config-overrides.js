const { override, useBabelRc, useEslintRc } = require('customize-cra')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const enableRelativeImportOutsideOfSrc = () => (config) => {
  const scopePluginIndex = config.resolve.plugins.findIndex(
    ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
  )

  config.resolve.plugins.splice(scopePluginIndex, 1)

  return config
}

const useFastRefresh = () => (config) => {
  const isDev = config.mode !== 'production'

  if (isDev) {
    config.plugins.unshift(new ReactRefreshWebpackPlugin())
  }

  return config
}

module.exports = override(
  useEslintRc(),
  useBabelRc(),
  enableRelativeImportOutsideOfSrc(),
  useFastRefresh()
)
