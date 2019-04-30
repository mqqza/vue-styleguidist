const vueLoader = require('vue-loader')

module.exports = {
	sections: [
		{
			name: 'Atoms',
			sections: [
				{
					components: './src/components/Label/Label.vue'
				},
				{
					components: './src/components/Button/Button.vue'
				}
			]
		},
		{
			name: 'Empty',
			components: []
		},
		{
			name: 'Components',
			components: './src/components/Placeholders/Placeholder.vue'
		}
	],
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader'
				},
				{
					test: /\.js?$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				}
			]
		},
		plugins: [new vueLoader.VueLoaderPlugin()]
	},
	styleguideDir: 'dist',
	ribbon: {
		text: 'Back to examples',
		url: 'https://vue-styleguidist.github.io/Examples.html'
	}
}
