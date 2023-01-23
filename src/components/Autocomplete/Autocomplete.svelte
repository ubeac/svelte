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

	let options = items

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
		onChange: (selected: any) => {
			const filterd = items?.filter((item) => {
				return selected.includes(`${getKey(item)}`)
			})
			value = multiple ? filterd : filterd?.[0]
		},
		onInitialize: () => {
			loaded = true
		},
	} as Partial<TomSettings>

	$: disabled ? instance?.disable() : instance?.enable()

	$: update('value', value)

	$: update('items', items)

	function getKey(item: any) {
		return typeof item === 'object' ? item[itemKey!] : item
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
		if (!instance) return

		if (key === 'items') {
			if (typeof window === 'undefined' || options === input) return

			const current = value

			options = input

			requestAnimationFrame(() => {
				instance.clear(true)
				instance.clearOptions()
				instance.sync()
				requestAnimationFrame(() => update('value', current))
			})
		}

		if (key === 'value') {
			if (typeof input === 'undefined') return

			const mapped = [input].flat().map(getKey)

			const keys = multiple ? mapped : mapped?.[0]

			instance.setValue(keys, true)
		}
	}

	onMount(bind)

	onDestroy(unbind)
</script>

<El tag="select" bind:element {...$$restProps} {...props}>
	{#each options || [] as item, index}
		<slot {index} {item}>
			<!-- DON'T USE 'El' INSTEAD OF 'option' -->
			<option value={getKey(item)}>
				{getValue(item)}
			</option>
		</slot>
	{/each}
</El>
