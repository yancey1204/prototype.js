'use strict'

var path = require('path')
var merge = require('webpack-merge')
var webpack = require('webpack')

var shared = require('./webpack.shared')


module.exports = merge(shared, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
  ]
});
