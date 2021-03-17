const path = require('path');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ESLintPlugin = require('eslint-webpack-plugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { ProvidePlugin } = require('webpack');

module.exports = (_, {
  mode,
  port = process.env.PORT || 3030
}) => ({
  mode,
  devtool: { development: 'cheap-module-source-map' }[mode],
  bail: { production: true }[mode],
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader',
            options: {
              compact: true
            },
          },
          {
            test: /\.svg$/,
            include: path.resolve(__dirname, 'src/res/icons'),
            loader: 'svg-react-loader'
          },
          {
            test: /\.woff(2)?$/,
            include: path.resolve(__dirname, 'src/res/fonts'),
            loader: 'file-loader',
            options: {
              name: 'static/fonts/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
    alias: {
      '#': path.resolve(__dirname, 'src')
    },
    plugins: [
      new ModuleScopePlugin(
        path.resolve(__dirname, 'src'),
        [path.resolve(__dirname, 'package.json')]
      )
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'static/js/[name].[fullhash:8].js',
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  },
  entry: [].concat(
    { development: require.resolve('react-dev-utils/webpackHotDevClient') }[mode] || [],
    './src'
  ),
  plugins: [].concat(
    new ProvidePlugin({
      process: 'process/browser',
    }),
    new ESLintPlugin({
      formatter: eslintFormatter,
      eslintPath: require.resolve('eslint')
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    new WebpackManifestPlugin(),
    { development: new CaseSensitivePathsPlugin() }[mode] || []
  ),
  devServer: {
    host: '0.0.0.0',
    port,
    open: `http://localhost:${port}`,
    hot: true,
    webSocketServer: 'ws',
    static: {
      directory: path.resolve(__dirname, 'public'),
      watch: {
        ignored: /node_modules/,
      },
    },
    client: {
      logging: 'none',
    },
  }
});
