const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
	entry: './src/main/js/index',
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 3002,
	},
	output: {
		path: path.resolve(
			__dirname,
			'src',
			'main',
			'resources',
			'META-INF',
			'resources',
			'js'
		),
		publicPath: '/o/app2/js/',
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'app2',
			library: { type: 'var', name: 'app2' },
			filename: 'remoteEntry.js',
			exposes: {
				'./greetings': './src/main/js/greetings',
			},
		}),
		// new HtmlWebpackPlugin({
		// 	template: './public/index.html',
		// }),
	],
};
