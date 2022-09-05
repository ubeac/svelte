<script lang="ts">
	import { createEventDispatcher, get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition, createOptions } from '$lib/utils'

	/**
	 * Select items
	 */
	export let items: any[] = []
	/**
	 * Value that selected options are bound to
	 */
	export let key: string = 'value'
	/**
	 * Selected option's value
	 */
	export let multiple: boolean = false
	/**
	 * Set the field that should be used as each option label
	 */
	export let text: string = 'text'
	/**
	 * Value that selected checkboxes are bound to
	 */
	export let value: any = multiple ? [] : ''

	const dispatch = createEventDispatcher()

	let forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('select', undefined, $$props.class, true)

	$: ({ getKey, getText, toValue } = createOptions({ items, key, text }))

	function change(event: any) {
		let selectedItems = []
		let selectedList = event.target.selectedOptions
		for (const item of selectedList) {
			selectedItems.push(toValue(item.value))
		}
		if (multiple) {
			value = selectedItems
		} else {
			value = selectedItems[0]
		}
		dispatch('changed', value)
	}
</script>

{#if condition($$props)}
	{#if multiple}
		<select {value} on:change={change} multiple use:forwardEvents {...$$restProps} class={classes}>
			{#each items as item}
				<option value={getKey(item)}>
					{getText(item)}
				</option>
			{/each}
		</select>
	{:else}
		<select bind:value on:change={change} use:forwardEvents {...$$restProps} class={classes}>
			{#if $$props.placeholder}
				<option disabled selected value="">{$$props.placeholder}</option>
			{/if}
			{#each items as item}
				<option value={getKey(item)}>
					{getText(item)}
				</option>
			{/each}
		</select>
	{/if}
{/if}
