import path from 'path';
/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
/* eslint-enable import/no-extraneous-dependencies */
import config from '../etc/webpack.dev.babel';

const host = '127.0.0.1';
const port = 8000;

const compiler = webpack(config);
compiler.plugin('done', () => {
  console.log(`App is running at ${host}:${port}`);
});

const server = new WebpackDevServer(compiler, {
  contentBase: '.',
  historyApiFallback: true,
  hot: true,
  inline: true,
  stats: 'errors-only',
});

server.listen(port);
