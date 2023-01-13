import fs from 'fs'
import path from 'path'
import sass from 'sass'
import postcss from 'postcss'
import postcssFilterRules from 'postcss-filter-rules'

const prefix = '.u-';
// TODO: Optimize (only compile one)
const files = ['tabler']

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

async function clean(css) {
	return postcss([postcssFilterRules({
		filter: (selector, parts) => {
			return selector.startsWith(prefix) || !selector.startsWith('.')
		}
	})]).process(css, {from: undefined}).then(result => result.css)
}

async function process(file) {
	const css = compile(file)
	const cleanedCss = await clean(css)

	fs.writeFileSync(`./static/css/${file}.clean.css`, cleanedCss, {})
	fs.writeFileSync(`./static/css/${file}.clean.css`, cleanedCss, {})

	fs.writeFileSync(`./src/styles/${file}.css`, css, {})
	fs.writeFileSync(`./src/styles/${file}.css`, css, {})

}
fs.mkdirSync('./static/css', { recursive: true })

for (const file of files) {
	process(file)
}
