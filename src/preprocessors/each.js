import { parse, walk } from 'svelte/compiler'

import magicString from 'magic-string'

const styleRegex = /<style(\s[^]*?)?>([^]*?)<\/style>/gi
const scriptRegex = /<script(\s[^]*?)?>([^]*?)<\/script>/gi

/** @return {import('svelte-preprocess/dist/types').PreprocessorGroup} */
export default function eachProcessor() {
	return {
		markup({ content, filename }) {
			// split markup, scripts and styles
			console.log('markup')
			const script = content.match(scriptRegex)?.join('')
			const style = content.match(styleRegex)?.join('')
			const markup = content.replace(styleRegex, '').replace(scriptRegex, '')

			const hasEachAttributeRegex = /<[^>]+\seach={[^>]*>/g
			const hasEachAttribute = markup.match(hasEachAttributeRegex)

			const hasLetItemAttributeRegex = /<[^>]+\slet:item[^>]*>/g
			const hasLetItemAttribute = markup.match(hasLetItemAttributeRegex)

			console.log({ hasEachAttribute, hasLetItemAttribute })

			if (!hasEachAttribute || !hasLetItemAttribute) return

			const result = new magicString(markup)

			const ast = parse(markup)

			function isLetItem(attribute) {
				return attribute.type === 'Let' && attribute.name == 'item'
			}
			function isLetIndex(attribute) {
				return attribute.type === 'Let' && attribute.name == 'index'
			}
			function isKey(attribute) {
				return attribute.type === 'Attribute' && attribute.name.startsWith('(') && attribute.name.endsWith(')')
			}
			console.log(ast)
			walk(ast.html, {
				enter(node, parent) {
					console.log('node', node, parent)
					if (node.type !== 'Attribute' || node.name !== 'each') return

					let item = 'item',
						index = '',
						key = ''

					const itemAttr = parent.attributes.find(isLetItem)
					if (itemAttr) {
						item = itemAttr.expression?.name ?? item
						result.remove(itemAttr.start - 1, itemAttr.end)
					}

					const indexAttr = parent.attributes.find(isLetIndex)
					if (indexAttr) {
						const indexValue = indexAttr ? indexAttr.expression?.name ?? 'index' : undefined
						index = indexValue ? `, ${indexValue}` : ''
						result.remove(indexAttr.start - 1, indexAttr.end)
					}

					const keyAttr = parent.attributes.find(isKey)
					if (keyAttr) {
						key = ` ${keyAttr.name}`

						result.remove(keyAttr.start - 1, keyAttr.end)
					}

					const openTag = `{#each ${markup.substring(node.start + 6, node.end - 1)} as ${item}${index}${key}}`
					const closeTag = `{/each}`

					result.prependLeft(parent.start, openTag)
					result.remove(node.start - 1, node.end)
					result.appendRight(parent.end, closeTag)
				},
			})

			// attach script and style tags
			if (script) result.prependLeft(0, script)
			if (style) result.appendRight(result.length(), style)

			return {
				code: result.toString(),
				map: result.generateMap({ hires: true, file: filename }),
			}
		},
	}
}
