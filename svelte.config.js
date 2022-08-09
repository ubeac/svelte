import preprocess from 'svelte-preprocess'

import adapter from '@sveltejs/adapter-auto'
import path from 'path'

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@import '@tabler/core/src/scss/config';`,
			importer(url) {
				if (url[0] === '~') {
					url = path.resolve('node_modules', url.substr(1))
				}
				return { file: url }
			},
		},
	}),

	kit: {
		adapter: adapter(),
		files: {
			lib: 'src',
		},
		package: {
			files(file) {
				const items = ['index.ts', 'styles.css', 'components', 'directives', 'scss', 'types', 'utils']
				return items.some((item) => file.startsWith(item))
			},
		},
	},
}

export default config
