'use strict'

var path = require('path')
var merge = require('webpack-merge')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var shared = require('./webpack.shared')


module.exports = merge(shared, {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'prototype.js',
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app'
    }),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
});
