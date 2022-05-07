import { paramCase } from 'change-case'

const prefix = `u`

export const classname = (root?: string, ...inputs: Array<any>): string => {
	root = root && paramCase(root)
	const result: Array<string> = []
	if (root) result.push(`${prefix}-${root}`)
	for (const input of inputs) {
		switch (typeof input) {
			case 'string':
				input.split(' ').map((section) => result.push(paramCase(section)))
				break
			default:
				for (const key in input) {
					const global = key.startsWith('$')
					const name = paramCase(key.replace('$', ''))
					const value = input[key]
					const sections = [prefix]
					!global && root && sections.push(root)
					sections.push(value === true ? name : value)
					result.push(sections.join('-'))
				}
				break
		}
	}
	return result.join(' ')
}
