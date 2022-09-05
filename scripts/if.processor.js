import { parse, walk } from 'svelte/compiler'

function insertAt(string, index, text) {
	return string.substring(0, index) + text + string.substring(index)
}

function removeAt(string, from, to) {
	return string.substring(0, from) + string.substring(to)
}

function replaceAt(string, index, text) {
	return string.substring(0, index) + text + string.substring(index + text.length)
}

// we can also use prettier to generate svelte code
//  https://gist.github.com/mizchi/d9be0ec969203f32f66e5f6eda9decb9

export default function ifProcessor() {
	return {
		markup: ({ content }) => {
			let result = content

			const ast = parse(content)

			walk(ast.html, {
				enter(node, parent) {

					if (node.type === 'Attribute' && node.name === 'if') {
						const value = `{#if ${content.substring(node.start + 4, node.end - 1)}}`

                        /**
                         * <div if={something}>...</div> =====> <div>...</div>
                         */
						result = removeAt(result, node.start - 1, node.end)

                        /**
                         * <div>...</div> =====> {#if something}<div>...</div>
                         */
						result = insertAt(result, parent.start, value)

						// TODO find better solution 
                        // '»' is a special character which we later replace all of '»' with something else
                        /**
                         * {#if something}<div>...</div> ====> {#if something}<div>...</div»
                         */
						result = replaceAt(result, parent.end - 1, '»')
					}
				},
			})

            /**
             *  {#if something}<div>...</div» =====> {#if something}<div>...</div>{/if}
             */
			result = result.replace(/»/g, '>{/if}')

			return {
				code: result,
			}
		},
	}
}
