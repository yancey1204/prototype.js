/* eslint-disable import/no-extraneous-dependencies */
import merge from 'webpack-merge';
import webpack from 'webpack';
import common from './webpack.common';
/* eslint-enable import/no-extraneous-dependencies */

module.exports = merge(common, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  ],
});
