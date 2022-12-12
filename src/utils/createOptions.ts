import { writable } from 'svelte/store'

interface CreateOptions {
	items?: Array<any> | object
	key?: string
	text?: string
}

export const createOptions = ({ items = [], key = 'key', text = 'text' }: CreateOptions) => {
	const options = writable(Array.isArray(items) ? items : Object.entries(items))

	const extract = (option: any) => {
		switch (getType(option)) {
			case 'array':
				return {
					key: option[0],
					text: option[1],
				}
			case 'object':
				return {
					key: option[key],
					text: option[text],
				}
			default:
				return {
					key: option,
					text: option,
				}
		}
	}

	const fromValue = (value: any) => {
		if (Array.isArray(value)) return value.map(toKey)
		return toKey(value)
	}

	const getKey = (option: any) => {
		const { key } = extract(option)
		return toKey(key)
	}

	const getText = (option: any) => {
		return extract(option).text
	}

	const getType = (input: any) => {
		return Object.prototype.toString
			.call(input)
			.replace('object', '')
			.replace('[', '')
			.replace(']', '')
			.trim()
			.toLowerCase()
	}

	const isSelected = (option: any, value: any) => {
		const { key } = extract(option)
		if (Array.isArray(value)) return value?.includes(key)
		return key == value
	}

	const toKey = (input: any) => {
		switch (getType(input)) {
			case 'number':
				return `${input}`
			default:
				return input
		}
	}

	const toValue = (input: any) => {
		const isMultiple = Array.isArray(input)
		const result = [input].flat().map((input) => {
			const [value, type] = input.split(':')
			switch (type) {
				case 'number':
					return Number(value)
			}
			switch (value) {
				case 'null':
					return null
				case 'undefined':
					return undefined
				default:
					return value
			}
		})
		return isMultiple ? result : result[0]
	}

	return {
		options,
		fromValue,
		getKey,
		getText,
		isSelected,
		toValue,
	}
}
