'use strict'

var path = require('path')
var webpack = require('webpack')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
var { CheckerPlugin } = require('awesome-typescript-loader')

var distdir = 'dist';

module.exports = {
  entry: [
    './src/'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(process.cwd(), distdir)
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript'
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new CheckerPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') },
    })
  ]
};
