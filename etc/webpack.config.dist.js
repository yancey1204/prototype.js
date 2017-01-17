var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');

var common = require('./webpack.common');


module.exports = merge(common, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  ],
});
