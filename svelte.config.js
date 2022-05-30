import preprocess from 'svelte-preprocess'

import adapter from '@sveltejs/adapter-auto'
import { mdsvex } from 'mdsvex'
import path from 'path'

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				importer: (url, prev) => {
					if (url[0] === '~') {
						url = path.resolve('node_modules', url.substr(1))
					}
					return { file: url }
				},
			},
		}),
		mdsvex({
			extensions: ['.svelte.md', '.md'],
			layout: {
				_: 'src/routes/_markdown.svelte',
			},
		}),
	],

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: [
					{
						find: '@app',
						replacement: (val) => val.replace(/^@app/, path.resolve('src')),
					},
					{
						find: /^~.+/,
						replacement: (val) => val.replace(/^~/, ''),
					},
				],
			},
		},
	},
	extensions: ['.svelte', '.svelte.md', '.md'],
}

export default config
