import { writable } from 'svelte/store'

interface CreateOptions {
	items: Array<any>
	key: string
	text: string
}

export const createOptions = ({ items, key, text }: CreateOptions) => {
	const options = writable(Array.isArray(items) ? items : Object.entries(items))

	const getId = (option: any) => {
		return toId(getKey(option))
	}

	const getKey = (option: any) => {
		switch (getType(option)) {
			case 'array':
				return option[0]
			case 'object':
				return option[key]
			default:
				return option
		}
	}

	const getText = (option: any) => {
		switch (getType(option)) {
			case 'array':
				return option[1]
			case 'object':
				return option[text]
			default:
				return option
		}
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

	const getValue = (input: any) => {
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

	const isSelected = (option: any, value: any) => {
		if (Array.isArray(value)) {
			return value?.includes(getKey(option))
		}
		return getKey(option) === value
	}

	const toId = (value: any) => {
		switch (getType(value)) {
			case 'number':
				return `${value}:number`
			default:
				return value
		}
	}

	return {
		options,
		getId,
		getKey,
		getText,
		getValue,
		isSelected,
		toId,
	}
}
