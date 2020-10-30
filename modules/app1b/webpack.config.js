const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
	entry: './src/main/js/index',
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 3001,
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
		publicPath: '/o/app1b/js/',
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'app1b',
			remotes: {
				app2: 'app2@/o/app2/js/remoteEntry.js',
			},
			shared: {
				'is-object': {},
			},
		}),
		// new HtmlWebpackPlugin({
		// 	template: './public/index.html',
		// }),
	],
};
