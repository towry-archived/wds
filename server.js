// const WebpackDevServer = require('webpack-dev-server');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const pkg = require('./package.json');
// const path = require('path');

var app = new (require('express'))();

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
	noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.get("/", function (req, res) {
	res.sendFile(__dirname + '/sandbox/index.html');
});

app.listen(pkg.port, function (err) {
	if (err) {
		console.error(err);
	} else {
		console.info("==> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.", pkg.port, pkg.port);
	}
});
