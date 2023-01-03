import { sveltekit } from '@sveltejs/kit/vite'
import purgeCSSPlugin from '@fullhuman/postcss-purgecss'

/** @type {import('vite').UserConfig} */
const config = {
	server: { port: 3000 },
	plugins: [sveltekit()],
	css: {
		postcss: {
			plugins: [
				purgeCSSPlugin({
					content: ['./src/routes/**/*.svelte']
				})
			]
		}
	}
}

export default config
