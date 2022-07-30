const preprocess = require('svelte-preprocess')
const path = require('path')

module.exports = {
	stories: ['./stories/**/*.svelte'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-essentials',
		'@storybook/addon-links',
		'@storybook/addon-svelte-csf',
	],
	framework: '@storybook/svelte',
	svelteOptions: {
		preprocess: preprocess({
			scss: {
				importer: (url, prev) => {
					if (url[0] === '~') {
						url = path.resolve('node_modules', url.substr(1))
					}
					return { file: url }
				},
			},
		}),
	},
	webpackFinal: async (config) => ({
		...config,
		resolve: {
			alias: {
				$lib: path.resolve('src'),
			},
			extensions: ['.js', '.ts'],
		},
	}),
}
