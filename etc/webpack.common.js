import path from 'path';
/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
/* eslint-enable import/no-extraneous-dependencies */

const distdir = path.join(__dirname, '..', 'dist');

module.exports = {
  entry: [
    './src/',
  ],
  output: {
    filename: 'bundle.js',
    path: distdir,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') },
    }),
  ],
};
