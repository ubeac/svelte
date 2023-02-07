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
	export let key: $$Props['key'] = undefined

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
		placeholder,
		cssProps: { loaded, size, state },
	}

	$: settings = {
		dropdownClass: classname(cssPrefix + '-dropdown'),
		optionClass: classname(cssPrefix + '-option'),
		onChange(key) {
			value = items?.[key as any]
		},
		onInitialize() {
			loaded = true
		},
	} as Partial<TomSettings>

	$: disabled ? instance?.disable() : instance?.enable()

	$: instance && update('items', items)

	$: instance && update('value', value)

	function getKey(item: any, fallback: any) {
		if (!key) return fallback

		if (typeof key == 'function') return key(item)

		const computed = typeof item === 'object' ? item[key] : item

		return `${typeof computed}:${computed}`
	}

	function bind() {
		if (!element) return
		instance = new TomSelect(element, settings as any)
	}

	function unbind() {
		instance?.destroy()
	}

	function update(key: string, input: any) {
		if (key == 'items') {
			instance.clear(true)
			instance.clearOptions()
			requestAnimationFrame(() => instance.sync())
		}

		if (key == 'value') {
			const index = items?.findIndex((item) => item === value)
			instance.setValue(`${index || ''}`, true)
		}
	}

	onMount(bind)

	onDestroy(unbind)
</script>

<El tag="select" bind:element {...$$restProps} {...props}>
	{#each items || [] as item, index (getKey(item, index))}
		<!-- DON'T USE 'El' INSTEAD OF 'option' -->
		<option value={index} selected={value === item}>
			<slot {index} {item}>{item}</slot>
		</option>
	{/each}
</El>
