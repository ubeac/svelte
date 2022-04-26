const { mergeConfig } = require('vite');
const preprocess = require('svelte-preprocess')
const path = require('path')

console.log(preprocess)
module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite'
	},
	svelteOptions: {
		preprocess: preprocess()
	},
	async viteFinal(config, {configType}) {
		return mergeConfig(config, {
			resolve: {
				alias: {
					'$lib': path.resolve('./src/lib')
				}
			}
		})
	}
};
