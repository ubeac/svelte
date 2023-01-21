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

	let loaded = true

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
		valueField: itemKey!,
		labelField: itemValue!,
		searchField: [itemKey!, itemValue!],
		load(query: string, callback: any) {
			if (load) {
				load(query)
					.then((data) => {
						callback(data)
					})
					.catch(() => callback())
			}
		},
		onInitialize: () => {
			loaded = true
		},
		onChange: (selected: any) => {
			const filterd = items?.filter((item) => {
				return selected.includes(`${getKey(item)}`)
			})
			value = multiple ? filterd : filterd?.[0]
		},
	} as Partial<TomSettings>

	$: disabled ? instance?.disable() : instance?.enable()

	$: update(items)

	$: if (typeof value != 'undefined') {
		instance?.setValue(value, true)
	}

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

	function update(items: any) {
		options = items

		if (typeof window == 'undefined') return

		requestAnimationFrame(() => {
			instance?.clear()
			instance?.clearOptions()
			instance?.sync()
		})
	}

	onMount(() => bind())

	onDestroy(() => unbind())
</script>

<El tag="select" bind:element bind:value {...$$restProps} {...props}>
	{#each options || [] as item, index}
		<slot {index} {item}>
			<!-- DON'T USE 'El' INSTEAD OF 'option' -->
			<option value={getKey(item)}>
				{getValue(item)}
			</option>
		</slot>
	{/each}
</El>
