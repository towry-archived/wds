const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	
	entry: [
		'webpack-hot-middleware/client',
		'./sandbox/app.js'
	],

	output: {
		path: path.join(__dirname, 'sandbox'),
		filename: 'bundle.js',
		publicPath: '/static/'
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
				include: __dirname + '/src',
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
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
}
