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

			const hasIfAttributeRegex = /<[^>]+\sif={[^>]*>/g
			const hasIfAttribute = markup.match(hasIfAttributeRegex)
			if (!hasIfAttribute) return

			const s = new magicString(markup)

			const ast = parse(markup)

			walk(ast.html, {
				enter(node, parent) {
					if (node.type === 'Attribute' && node.name === 'if') {
						const openTag = `{#if ${markup.substring(node.start + 4, node.end - 1)}}`
						const closeTag = `{/if}`

						s.prependLeft(parent.start, openTag)

						s.remove(node.start - 1, node.end)

						s.appendRight(parent.end, closeTag)
					}
				},
			})

			// attach script and style tags
			if (script) s.prependLeft(0, script)
			if (style) s.appendRight(s.length(), style)

			return {
				code: s.toString(),
				map: s.generateMap({ hires: true, file: filename }),
			}
		},
	}
}
