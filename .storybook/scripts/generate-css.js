const fs = require('fs')
const path = require('path')
const sass = require('sass')

const filePath = './src/scss/index.scss'

const result = sass.compile(filePath, {
	importers: [
		{
			findFileUrl(url, prev, done) {
				if (url.startsWith('~')) {
					url = path.resolve('node_modules', url.substr(1))
				}
				return new URL('file://' + url)
			},
		},
	],
	loadPaths: ['node_modules'],
})

fs.writeFileSync('./.storybook/styles.css', result.css)
