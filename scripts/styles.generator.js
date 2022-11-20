import fs from 'fs'
import path from 'path'
import sass from 'sass'

// TODO: Optimize (only compile one)
const files = ['tabler', 'bootstrap']

function compile(file) {
	const { css } = sass.compile(`./src/scss/${file}/index.scss`, {
		/** @type {import ('sass').FileImporter<'sync'>[]} */
		importers: [
			{
				findFileUrl(url) {
					if (url.startsWith('@') || url.startsWith('~')) {
						url = path.resolve('node_modules', url.substr(1))
					}
					return new URL('file://' + url)
				},
			},
		],
		loadPaths: ['node_modules'],
	})
	return css
}

for (const file of files) {
	const css = compile(file)
	fs.writeFileSync(`./static/css/${file}.css`, css)
}
