<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import TomSelect from 'tom-select'
	import type { TomSettings } from 'tom-select/dist/types/types'

	import { forwardEventsBuilderNew } from '$lib/directives'
	import { classname, condition, createOptions } from '$lib/utils'

	/**
	 * TODO
	 */
	export let forwardEvents = forwardEventsBuilderNew(get_current_component())

	/**
	 * TODO
	 */
	export let disabled: boolean = false

	/**
	 * TODO
	 */
	export let items: Array<any> | object | undefined = undefined

	/**
	 * TODO
	 */
	export let key: string | undefined = undefined

	/**
	 * TODO
	 */
	export let loading: boolean = false

	/**
	 * TODO
	 */
	export let multiple: boolean = false

	/**
	 * TODO
	 */
	export let preview: boolean = false

	/**
	 * TODO
	 */
	export let text: string | undefined = undefined

	/**
	 * TODO
	 */
	export let value: Array<any> | string | number | undefined = undefined

	const dispatch = createEventDispatcher()

	let element: HTMLSelectElement | undefined = undefined
	let instance: TomSelect
	let settings: Partial<TomSettings>

	$: classes = classname('autocomplete', { preview }, $$props.class)

	$: typeof window != 'undefined' && items && requestAnimationFrame(() => instance?.sync())

	$: if (disabled || loading) {
		instance?.disable()
	} else {
		instance?.enable()
	}

	$: settings = {
		dropdownClass: classname('autocomplete-items'),
		optionClass: classname('autocomplete-item'),
		onChange: (event) => {
			dispatch('changed', (value = getValue(event)))
		},
		mode: multiple ? 'multi' : 'single',
	}

	$: ({ options, getId, getText, getValue, toId } = createOptions({ items, key, text }))

	function bind(deps?: any) {
		if (!element) return
		instance = new TomSelect(element, settings)
	}

	function unbind() {
		instance?.destroy()
	}

	$: {
		unbind()
		bind({ multiple })
	}

	onMount(bind)

	onDestroy(unbind)
</script>

{#if condition($$props)}
	{#if preview}
		<div use:forwardEvents {...$$restProps} class={classes}>
			{value}
		</div>
	{:else}
		<select bind:this={element} value={toId(value)} use:forwardEvents {multiple} {...$$restProps} class={classes}>
			{#each $options as option}
				<option value={getId(option)}>
					{getText(option)}
				</option>
			{/each}
		</select>
	{/if}
{/if}
