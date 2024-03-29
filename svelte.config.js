import sveltePreprocess from 'svelte-preprocess'

import adapter from '@sveltejs/adapter-static'
import path from 'path'

import {ifProcessor, previewProcessor} from '@ubeac/svelte-preprocessors'

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		ifProcessor(),
		previewProcessor(),
		sveltePreprocess({
			scss: {
				importer(url) {
					if (url[0] === '~') {
						url = path.resolve('node_modules', url.substr(1))
					}
					return { file: url }
				},
			},
		}),
	],

	kit: {
		adapter: adapter({
			precompress: true,
		}),
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
				'styles',
				'components',
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
