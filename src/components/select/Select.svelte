<script lang="ts">
	import { createEventDispatcher, get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, createOptions } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * TODO
	 */
	export let items: Array<any> = []

	/**
	 * TODO
	 */
	export let key: string = 'value'
	/**
	 * TODO
	 */
	export let text: string = 'text'
	/**
	 * Selected option's value
	 */
	export let multiple: boolean = false
	export let value: any = multiple ? [] : ''

	const dispatch = createEventDispatcher()

	$: classes = classname('select', $$props.class)

	$: ({ fromValue, getKey, getText, toValue } = createOptions({ items, key, text }))
	function change(event: any) {
		let selectedItems = []
		let selectedList = event.target.selectedOptions
		for (const item of selectedList) {
			debugger
			selectedItems.push(toValue(item.value))
		}
		if (multiple) {
			value = selectedItems
		} else {
			value = selectedItems[0]
		}
		// 	value = [...value,val]
		dispatch('change', value)
	}
</script>

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
