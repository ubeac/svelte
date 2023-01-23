<script lang="ts">
	import { onDestroy, onMount } from 'svelte'

	import TomSelect from 'tom-select'
	import type { TomSettings } from 'tom-select/dist/types/types'

	import { classname, El } from '$lib/components'
	import type { AutocompleteProps } from '$lib/components'

	type $$Props = AutocompleteProps

	/**
	 * Set Css Prefix for the autocomplete
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'autocomplete'

	/**
	 * Set autocomplete as disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

	/**
	 * Autocomplete items
	 */
	export let items: $$Props['items'] = []

	/**
	 * Specifies the key of the object
	 */
	export let itemKey: $$Props['itemKey'] = 'key'

	/**
	 * Specifies the label of the object
	 */
	export let itemValue: $$Props['itemValue'] = 'value'

	/**
	 * Load more options using async function.
	 */
	export let load: $$Props['load'] = undefined

	/**
	 * Choose multiple items
	 */
	export let multiple: $$Props['multiple'] = undefined

	/**
	 * Set placeholder for the autocomplete
	 */
	export let placeholder: $$Props['placeholder'] = undefined

	/**
	 * Set the size of the autocomplete component
	 */
	export let size: $$Props['size'] = undefined

	/**
	 * Set the state of autocomplete
	 */
	export let state: $$Props['state'] = undefined

	/**
	 * Value that selected options are bound to
	 */
	export let value: $$Props['value'] = undefined

	let element: HTMLSelectElement

	let instance: TomSelect

	let loaded = false

	$: props = {
		cssPrefix,
		disabled,
		multiple,
		placeholder,
		cssProps: { loaded, size, state },
	}

	$: settings = {
		dropdownClass: classname(cssPrefix + '-dropdown'),
		optionClass: classname(cssPrefix + '-option'),
		valueField: itemKey!,
		labelField: itemValue!,
		searchField: [itemValue!],
		load(query: string, callback: Function) {
			load?.(query)
				.then((items) => {
					callback(convert(items))
				})
				.catch(() => callback([]))
		},
		onChange(keys) {
			const filterd = [keys].flat().map((key: any) => {
				return instance.options[key]?.item
			})
			value = multiple ? filterd : filterd?.[0]
		},
		onInitialize() {
			loaded = true
		},
	} as Partial<TomSettings>

	$: disabled ? instance?.disable() : instance?.enable()

	$: instance && update('items', items)

	$: instance && update('value', value)

	function convert(items: any) {
		return items.map((item: any) => {
			return {
				[itemKey!]: getKey(item),
				[itemValue!]: getValue(item),
				item,
			}
		})
	}

	function getKey(item: any) {
		const key = typeof item === 'object' ? item[itemKey!] : item
		return `${typeof key}:${key}`
	}

	function getSelected(item: any) {
		return [value].flat().map(getKey).includes(getKey(item))
	}

	function getValue(item: any) {
		return typeof item === 'object' ? item[itemValue!] : item
	}

	function bind() {
		if (!element) return
		instance = new TomSelect(element, settings as any)
	}

	function unbind() {
		instance?.destroy()
	}

	function update(key: string, input: any) {
		if (key === 'items') {
			instance.clear(true)

			instance.clearOptions()

			instance.addOptions(convert(input))

			update('value', value)
		}

		if (key === 'value') {
			const mapped = [input].flat().map(getKey)

			const keys = multiple ? mapped : mapped?.[0]

			instance.setValue(keys, true)
		}
	}

	onMount(bind)

	onDestroy(unbind)
</script>

<El tag="select" bind:element {...$$restProps} {...props}>
	{#each items || [] as item, index}
		<slot {index} {item}>
			<!-- DON'T USE 'El' INSTEAD OF 'option' -->
			<option value={getKey(item)} selected={getSelected(item)}>
				{getValue(item)}
			</option>
		</slot>
	{/each}
</El>
