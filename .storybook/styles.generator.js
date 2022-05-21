const fs = require('fs')
const path = require('path')
const sass = require('sass')

const { css } = sass.compile('./src/scss/index.scss', {
	importers: [
		{
			findFileUrl(url, prev, done) {
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
