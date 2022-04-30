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
			importer: (url, prev) => {
				if (url[0] === '~') {
					url = path.resolve('node_modules', url.substr(1))
				}
				return { file: url }
			},
		},
	}),

	kit: {
		adapter: adapter(),
	},
}

export default config
