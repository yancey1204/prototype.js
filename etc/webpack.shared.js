'use strict'
var path = require('path')
var webpack = require('webpack')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')

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
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader:  'babel-loader?presets[]=es2015'
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') },
    })
  ]
};
