import { paramCase } from 'change-case'

export const classname = (root?: string, classes?: Object, additional?: string) => {
	const input = classes || ({} as any)
	const normalized = root && paramCase(root)
	const prefix = `u`
	const result: Array<string> = []
	if (normalized) result.push(`${prefix}-${normalized}`)
	for (const key in input) {
		const global = key.startsWith('$')
		const name = paramCase(key.replace('$', ''))
		const value = input[key]
		const sections = [prefix]
		!global && normalized && sections.push(normalized)
		sections.push(value === true ? name : value)
		result.push(sections.join('-'))
	}
	if (additional) result.push(additional)
	return result.join(' ')
}
