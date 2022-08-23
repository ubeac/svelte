<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import TomSelect from 'tom-select'
	import type { TomSettings } from 'tom-select/dist/types/types'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition, createOptions, requestAnimationFrame } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Control disabled state of component
	 */
	export let disabled: boolean = false

	/**
	 * TODO
	 */
	export let items: Array<any> | object | undefined = undefined

	/**
	 * an existing field in object (if item is array of object)
	 */
	export let key: string | undefined = undefined

	/**
	 * Show loading indicator
	 */
	export let loading: boolean = false

	/**
	 * Show value in Preview mode
	 */
	export let preview: boolean = false

	/**
	 * If items is array of objects, you should set text prop to an existing field in objects
	 */
	export let text: string | undefined = undefined

	/**
	 * Selected option
	 */
	export let value: Array<any> | string | number | undefined = undefined

	const dispatch = createEventDispatcher()

	let element: HTMLSelectElement | undefined = undefined
	let instance: TomSelect
	let settings: Partial<TomSettings>

	$: classes = classname('autocomplete', { preview }, $$props.class)

	$: items && requestAnimationFrame(() => instance?.sync())
	$: value && requestAnimationFrame(() => instance?.setValue(fromValue(value), true))

	$: if (disabled || loading) {
		instance?.disable()
	} else {
		instance?.enable()
	}

	$: settings = {
		dropdownClass: classname('autocomplete-items'),
		optionClass: classname('autocomplete-item'),
		onChange: (event) => {
			dispatch('changed', (value = toValue(event)))
		},
	}

	$: ({ options, fromValue, getKey, getText, toValue } = createOptions({ items, key, text }))

	function bind() {
		if (!element) return
		instance = new TomSelect(element, settings)
	}

	function unbind() {
		instance?.destroy()
	}

	onMount(bind)

	// onDestroy(unbind)
</script>

{#if condition($$props)}
	{#if preview}
		<div use:forwardEvents {...$$restProps} class={classes}>
			{value}
		</div>
	{:else}
		<select bind:this={element} value="" use:forwardEvents {...$$restProps} class={classes}>
			{#each $options as option}
				<option value={getKey(option)}>
					{getText(option)}
				</option>
			{/each}
		</select>
	{/if}
{/if}
