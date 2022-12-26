import preprocess from 'svelte-preprocess'

import adapter from '@sveltejs/adapter-static'
import path from 'path'

import ifProcessor from './src/preprocessors/if.js'
import previewProcessor from './src/preprocessors/preview.js'

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		ifProcessor(),
		previewProcessor(),
		preprocess({
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
		adapter: adapter(),
		files: {
			lib: 'src',
			assets: 'static',
		},
		alias: {
			'@ubeac/svelte': path.resolve('./src'),
			'$lib/components': path.resolve(path.join('./src', 'components', 'index.js'))
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
