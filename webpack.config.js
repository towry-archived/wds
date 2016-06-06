const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const pkg = require('./package.json');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:' + pkg.port,
		'webpack/hot/only-dev-server',
		'./sandbox/app.js'
	],
	output: {
		path: path.join(__dirname, 'sandbox'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},

	devServer: {
		contentBase: path.join(__dirname, './sandbox'),
		hot: true,
		inline: true
	},

	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			}
		]
	},

	sassLoader: {
		includePaths: [
			__dirname + "/src"
		]
	},

	plugins: [
		// new HtmlWebpackPlugin({
		// 	template: __dirname + "/src/index.html"
		// })
		new webpack.HotModuleReplacementPlugin()
	]
}
