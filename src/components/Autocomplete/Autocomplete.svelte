<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'

	import TomSelect from 'tom-select'
	import type { TomSettings } from 'tom-select/dist/types/types'

	import { type AutocompleteProps, classname, El } from '$lib/components'

	type $$Props = AutocompleteProps

	// #region Props

	export let cssPrefix: $$Props['cssPrefix'] = 'autocomplete'
	export let tag: $$Props['tag'] = 'select'

	export let create: $$Props['create'] = undefined
	export let items: $$Props['items'] = []
	export let multiple: $$Props['multiple'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let load: $$Props['load'] = undefined
	export let sort: $$Props['sort'] = true
	export let state: $$Props['state'] = undefined
	export let key: $$Props['key'] = 'key'
	export let text: $$Props['text'] = 'text'
	export let value: $$Props['value'] = undefined

	// #endregion

	let element: HTMLSelectElement
	let settings: Partial<TomSettings>

	let loaded: boolean = false

	let instance: TomSelect

	const dispatch = createEventDispatcher()

	$: settings = {
		dropdownClass: classname(cssPrefix + '-dropdown'),
		optionClass: classname(cssPrefix + '-option'),
		create,
		valueField: key!,
		labelField: text!,
		searchField: [text!, key!],
		onInitialize: () => {
			loaded = true
		},
		onOptionAdd: (event) => {
			dispatch('create', event)
		},
		onChange: (event: any) => {
			if (multiple) {
				dispatch('change', (value = event.map(getValue)))
			} else {
				dispatch('change', (value = getValue(event)))
			}
		},
		load(query: string, callback: any) {
			if (load) {
				load(query)
					.then((newItems) => {
						callback(newItems)
					})
					.catch((err) => callback())
			}
		},
	}

	$: if (sort === false) {
		settings.sortField = [{ field: '$order' }, { field: '$score' }]
	}

	$: instance?.setupOptions(items)

	async function bind(deps?: any) {
		if (!element) return
		instance = new TomSelect(element, settings)
	}

	function getValue(item: any) {
		return typeof item === 'object' ? item[key!] : item
	}

	function getText(item: any) {
		return typeof item === 'object' ? item[text!] : item
	}

	function unbind() {
		if (instance) {
			instance.destroy()
			loaded = false
		}
	}

	$: {
		settings
		if (instance) {
			unbind()
			bind()
		}
	}

	$: if (instance && typeof value !== 'undefined') {
		instance.setValue(value, true)
	}

	$: if (instance) {
		disabled ? instance.disable() : instance.enable()
	}

	onMount(() => bind())
	onDestroy(() => unbind())

	$: props = {
		placeholder,
		disabled,
		multiple,
		tag,
		cssPrefix,
		cssProps: {
			loaded,
			state,
		},
	}
</script>

<El {...$$restProps} bind:element bind:value {...props}>
	{#each items ?? [] as item, index (index)}
		<slot {index} {item}>
			<El tag="option" value={getValue(item)}>
				{getText(item)}
			</El>
		</slot>
	{/each}
</El>
