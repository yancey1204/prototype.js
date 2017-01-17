var webpack = require('webpack')
var merge = require('webpack-merge')
var WebpackDevServer = require('webpack-dev-server')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var shared = require('./webpack.shared')

var host = 'http://localhost'
var port = 8000
var distdir = 'dist'

var config = merge(shared, {
  entry: [
    'webpack-dev-server/client?' + host + ':' + port.toString(),
    'webpack/hot/dev-server',
    './src/'
  ],
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'prototype.js',
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})

var compiler = webpack(config)
compiler.plugin('done', function () {
  console.log('App is running at ' + host + ':' + port)
})
var server = new WebpackDevServer(compiler, {
  contentBase: distdir,
  historyApiFallback: true,
  hot: true,
  inline: true,
  inject: 'body',
  publicPath: '/assets/',
  stats: 'errors-only'
})

server.listen(port)
