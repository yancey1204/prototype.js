var webpack = require('webpack');
var merge = require('webpack-merge');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackTemplate = require('html-webpack-template');

var common = require('./webpack.common');

module.exports = merge(common, {
  entry: [
    './src/',
  ],
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'prototype.js',
      inject: false,
      template: HtmlWebpackTemplate,
      appMountId: 'app',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

