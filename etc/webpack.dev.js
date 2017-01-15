'use strict'
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var WebpackDevServer = require('webpack-dev-server')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')

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
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin()
  ]
})

var compiler = webpack(config)
compiler.plugin('done', function () {
  console.log('App is running at ' + host + ':' + port)
})
var server = new WebpackDevServer(compiler, {
  contentBase: '.',
  historyApiFallback: true,
  hot: true,
  publicPath: '/assets/',
  stats: 'errors-only'
})

server.listen(port)
