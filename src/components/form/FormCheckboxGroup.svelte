<script lang="ts">
	import { createEventDispatcher, get_current_component } from 'svelte/internal'

	import { FormCheckbox } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors, Items } from '$lib/types'
	import { classname, condition, createOptions } from '$lib/utils'

	/**
	 * set color of checkbox
	 */
	export let color: Colors = 'default'
	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Show Checkboxes in horizontal line
	 */
	export let inline: boolean = false

	/**
	 * TODO
	 */
	export let items: Items = undefined

	/**
	 * TODO
	 */
	export let key: string | undefined = 'key'

	/**
	 * If items is array of objects, you should set text prop to an existing field in objects
	 */
	export let text: string | undefined = 'text'

	/**
	 * Values of checked items
	 */
	export let value: any[] = []

	const dispatch = createEventDispatcher()

	$: ({ options, getKey, getText, isSelected } = createOptions({ items, key, text }))

	$: classes = classname('form-checkbox-group', undefined, $$props.class)

	function change(checked: any, option: any) {
		const filtered = value?.filter((key) => key !== getKey(option)) ?? []
		if (checked) {
			value = filtered.concat([getKey(option)])
		} else {
			value = filtered
		}
		dispatch('change', value)
	}
</script>

{#if condition($$props)}
	{#each $options as option}
		<FormCheckbox
			class={classes}
			{inline}
			{color}
			{forwardEvents}
			label={getText(option)}
			value={isSelected(option, value)}
			disabled={option.disabled}
			{...$$restProps}
			on:change={(event) => change(event.detail, option)} />
	{/each}
{/if}
