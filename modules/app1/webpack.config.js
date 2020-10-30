const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
	entry: './src/main/js/index', // this is not used but webpack complains if missing
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
		publicPath: '/o/app1/js/',
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'app1',
			// library: { type: 'var', name: 'app1' }, // this makes bundled code fail
			filename: 'remoteEntry.js',
			exposes: {
				'./index': './src/main/js/index',
			},
			remotes: {
				app1b: 'app1b@/o/app1b/js/remoteEntry.js',
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
