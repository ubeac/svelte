import preprocess from 'svelte-preprocess'

import adapter from '@sveltejs/adapter-auto'
import path from 'path'
import { mdsvex } from "mdsvex"

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
		vite: {
			resolve: {
				alias: {
					'@app': path.resolve('src'),
				},
			},
		},
	},
	extensions: [".svelte", ".svelte.md", ".md"],
	preprocess: [
		mdsvex({
			extensions: [".svelte.md", ".md"],
			layout: {
				_: "src/routes/_markdown.svelte",
			},
		}),
	],
}

export default config
