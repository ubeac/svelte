import fs from 'fs'
import path from 'path'
import sass from 'sass'

const { css } = sass.compile('./src/scss/index.scss', {
	/** @type {import ('sass').FileImporter<'sync'>[]} */
	importers: [
		{
			findFileUrl(url, options) {
				if (url.startsWith('@') || url.startsWith('~')) {
					url = path.resolve('node_modules', url.substr(1))
				}
				return new URL('file://' + url)
			},
		},
	],
	loadPaths: ['node_modules'],
})

fs.writeFileSync('./.storybook/styles.css', css)
fs.writeFileSync('./src/styles.css', css)
