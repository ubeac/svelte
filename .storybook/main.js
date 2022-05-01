const preprocess = require('svelte-preprocess')
const path = require('path')

module.exports = {
	stories: ['stories/**/*.stories.mdx', 'stories/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-svelte-csf'],
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
				'@components': path.resolve('src/components'),
				'@types': path.resolve('src/types'),
			},
			extensions: ['.js', '.ts'],
		},
	}),
}
