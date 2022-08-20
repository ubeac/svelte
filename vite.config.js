import * as vite from '@sveltejs/kit/vite'

/** @type {import('vite').UserConfig} */
const config = {
	server: { port: 3000 },
	plugins: [vite.sveltekit()],
}

export default config
