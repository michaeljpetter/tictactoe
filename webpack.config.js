const path = require('path');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');

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
        test: /\.js$/,
        enforce: 'pre',
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint')
            },
            loader: 'eslint-loader'
          }
        ]
      },
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
    filename: 'static/js/[name].[hash:8].js',
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  },
  entry: [].concat(
    { development: require.resolve('react-dev-utils/webpackHotDevClient') }[mode] || [],
    './src'
  ),
  plugins: [].concat(
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
    public: `localhost:${port}`,
    hot: true,
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
    compress: true,
    clientLogLevel: 'silent',
    watchOptions: {
      ignored: /node_modules/,
    },
    before: app => {
      app.use(errorOverlayMiddleware());
    }
  }
});
