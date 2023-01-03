import {vitePreprocess} from '@sveltejs/kit/vite'

import adapter from '@sveltejs/adapter-static'
import path from 'path'

import ifProcessor from './src/preprocessors/if.js'
import previewProcessor from './src/preprocessors/preview.js'

import purgeCss from '@fullhuman/postcss-purgecss'

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		ifProcessor(),
		previewProcessor(),
		vitePreprocess({
			script: true,
			style: {			
				
				css: {
					postcss: {
						plugins: [
							purgeCss({
								content: ['./src/routes/**/*.svelte']
							})
						]
					}
				}
			}
		}),
	],

	kit: {
		adapter: adapter(),
		files: {
			lib: 'src',
			assets: 'static',
		},
		alias: {
			'@ubeac/svelte': path.resolve('./src'),
		},
	},
	package: {
		files(file) {
			const items = [
				'index.d.ts',
				'index.ts',
				'bootstrap.css',
				'tabler.css',
				'components',
				'preprocessors',
				'directives',
				'scss',
				'types',
				'utils',
			]
			return items.some((item) => file.startsWith(item))
		},
	},
}

export default config
