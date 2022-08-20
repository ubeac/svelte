<script lang="ts">
	import { createEventDispatcher, get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { FormCheckbox, Label } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import type { Items } from '$lib/types'
	import { classname, condition, createOptions } from '$lib/utils'

	/**
	 * Set id for HTML element
	 */
	export let id: string = nanoid(10)

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
	export let key: string | undefined = undefined

	/**
	 * Set Label for Checkbox groups
	 */
	export let label: string | undefined = undefined

	/**
	 * Show Checked values in Preview mode
	 */
	export let preview: boolean = false

	/**
	 * If items is array of objects, you should set text prop to an existing field in objects
	 */
	export let text: string | undefined = undefined

	/**
	 * Values of checked items
	 */
	export let value: Array<any> = []

	const dispatch = createEventDispatcher()

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: ({ options, getKey, toValue, getText, isSelected } = createOptions({ items, key, text }))

	$: classes = classname('form-checkbox-group', undefined, $$props.class)

	function onChange(event: any, option: any) {
		value = value?.filter((key) => key !== toValue(getKey(option))) ?? []
		if (event.detail) value = value.concat([toValue(getKey(option))])
		dispatch('changed', value)
	}
</script>

{#if condition($$props)}
	{#if label}
		<Label for={id}>{label}</Label>
	{/if}
	{#if preview}
		<ul {...$$restProps} class={classname('form-checkbox-group-preview')} use:forwardEvents>
			{#each value as item}
				<li>{item}</li>
			{/each}
		</ul>
	{:else}
		{#each $options as option}
			<FormCheckbox
				class={classes}
				{inline}
				{forwardEvents}
				label={getText(option)}
				value={isSelected(option, value)}
				{...$$restProps}
				on:changed={(event) => onChange(event, option)} />
		{/each}
	{/if}
{/if}
