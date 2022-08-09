<script lang="ts">
	import { createEventDispatcher, get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition, createOptions } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * TODO
	 */
	export let items: Array<any> | Object | undefined = undefined

	/**
	 * TODO
	 */
	export let key: string | undefined = undefined
	/**
	 * TODO
	 */
	export let text: string | undefined = undefined
	/**
	 * Selected option's value
	 */
	export let value: any = undefined
	export let multiple: boolean = false

	const dispatch = createEventDispatcher()

	$: classes = classname('select', $$props.class)

	$: ({ options, fromValue, getKey, getText, toValue } = createOptions({ items, key, text }))

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
		// 	value = [...value,val]
		dispatch('change', value)
	}
</script>

{#if condition($$props)}
	<select value={fromValue(value)} {multiple} on:change={change} use:forwardEvents {...$$restProps} class={classes}>
		{#if $$props.placeholder}
			<option disabled selected value="">{$$props.placeholder}</option>
		{/if}
		{#each $options as option}
			<option value={getKey(option)}>
				{getText(option)}
			</option>
		{/each}
	</select>
{/if}
