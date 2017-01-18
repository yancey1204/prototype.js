/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import merge from 'webpack-merge';
/* eslint-enable import/no-extraneous-dependencies */

import common from './webpack.common';

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

