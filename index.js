const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const pkg = require('./package.json');
const path = require('path');

const server = new WebpackDevServer(webpack(webpackConfig), {
	publicPath: webpackConfig.output.publicPath,
	histroyApiFallback: true,
	quiet: false,
	noInfo: false,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	},
	stats: { colors: true }
});

server.listen(pkg.port, "localhost", function () {
	console.log('Magic happening at :' + pkg.port);
});
