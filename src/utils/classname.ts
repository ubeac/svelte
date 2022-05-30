import { paramCase } from 'change-case'

const prefix = `u`

interface ClassnameOptions {
	root?: string
}

const extract = (key: string) => {
	const global = key.startsWith('$$')
	const local = key.startsWith('$')
	const name = paramCase(key.replace(/\$/g, ''))
	return { global, local, name }
}

export const classname = (inputs: any | any[], options?: ClassnameOptions): string => {
	inputs = [inputs].flat()
	const root = paramCase((options && options.root) || '')
	const result: Array<string> = []
	for (const input of inputs) {
		const type = Object.prototype.toString
			.call(input)
			.replace(/\[|\]|object| /g, '')
			.toLowerCase()
		switch (type) {
			case 'string': {
				input.split(' ').map((section: string) => {
					const sections = []
					const { global, local, name } = extract(section)
					if (!global) sections.push(prefix)
					!local && root && sections.push(root)
					sections.push(name)
					result.push(sections.join('-'))
				})
				break
			}
			default: {
				for (const key in input) {
					const { global, local, name } = extract(key)
					const value = input[key]
					if (!value) continue
					const sections = []
					if (!global) sections.push(prefix)
					!local && root && sections.push(root)
					if (value === true) name && sections.push(name)
					else sections.push(value)
					result.push(sections.join('-'))
				}
				break
			}
		}
	}
	return result.join(' ')
}
