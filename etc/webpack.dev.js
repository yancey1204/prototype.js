var webpack = require('webpack')
var merge = require('webpack-merge')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var shared = require('./webpack.shared')

module.exports = merge(shared, {
  entry: [
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
});

