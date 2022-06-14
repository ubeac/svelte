import { paramCase } from 'change-case'

const prefix = `u`

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

export const classname = (root?: string, scoped?: any | any[], global?: any | any[]) => {
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
