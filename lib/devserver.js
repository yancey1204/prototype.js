var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../etc/webpack.config.dev');

var host = '127.0.0.1';
var port = 8000;
var distdir = path.join(process.cwd(), 'dist');

var compiler = webpack(config);
compiler.plugin('done', function () {
  console.log('App is running at ' + host + ':' + port);
});

var server = new WebpackDevServer(compiler, {
  contentBase: distdir,
  historyApiFallback: true,
  hot: true,
  inline: true,
  inject: 'body',
  publicPath: '/assets/',
  stats: 'errors-only',
});

server.listen(port);