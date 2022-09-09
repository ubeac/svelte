import { parse, walk } from 'svelte/compiler'

import magicString from 'magic-string'

const styleRegex = /<!--[^]*?-->|<style(\s[^]*?)?>([^]*?)<\/style>/gi
const scriptRegex = /<!--[^]*?-->|<script(\s[^]*?)?>([^]*?)<\/script>/gi

/** @return {import('svelte-preprocess/dist/types').PreprocessorGroup} */
export default function ifProcessor() {
	return {
		markup({ content, filename }) {
			// split markup, scripts and styles
			const script = content.match(scriptRegex)?.join('')
			const style = content.match(styleRegex)?.join('')
			const markup = content.replace(styleRegex, '').replace(scriptRegex, '')

			const hasAttributeRegex = /<[^>]+\sif={[^>]*>/g
			const hasAttribute = markup.match(hasAttributeRegex)
			if (!hasAttribute) return

			const result = new magicString(markup)

			const ast = parse(markup)

			walk(ast.html, {
				enter(node, parent) {
					if (node.type !== 'Attribute' || node.name !== 'if') return

					const openTag = `{#if ${markup.substring(node.start + 4, node.end - 1)}}`
					const closeTag = `{/if}`

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
