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
					if (typeof value == 'undefined' || value === false) continue
					const sections = []
					if (!global) sections.push(prefix)
					!local && root && sections.push(root)
					if (value === true) name && sections.push(name)
					else if (typeof value == 'number') name && sections.push(name, value)
					else sections.push(value)
					result.push(sections.join('-'))
				}
				break
			}
		}
	}
	return result.join(' ')
}

const parse = (inputs: any | any[]) => {
	const result: Array<string> = []
	for (const input of inputs) {
		const type = Object.prototype.toString
			.call(input)
			.replace(/\[|\]|object| /g, '')
			.toLowerCase()
		switch (type) {
			case 'array': {
				console.log('TODO', input)
				break
			}
			case 'object': {
				for (const key in input) {
					const value = input[key]
					if (typeof value == 'undefined' || value === false) continue
					if (value === true) key && result.push(key)
					else if (typeof value == 'number') key && result.push(`${key}-${value}`)
					else result.push(value)
				}
				break
			}
			case 'string': {
				input.split(' ').forEach((input: string) => result.push(input))
				break
			}
		}
	}
	return result
}

export const classnameNew = (root?: string, scoped?: any | any[], global?: any | any[]) => {
	root = paramCase(root || '')
	scoped = [scoped].flat()
	global = [global].flat()
	const classes = parse(scoped)
		.map((input) => (root ? `${prefix}-${root}-${input}` : `${prefix}-${input}`))
		.concat(...parse(global))
		.filter((input) => input)
	if (root) classes.unshift(`${prefix}-${root}`)
	return classes.join(' ') || undefined
}
