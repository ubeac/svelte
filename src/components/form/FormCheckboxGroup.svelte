<script lang="ts">
	import { createEventDispatcher, get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition, createOptions } from '$lib/utils'

	import { Label } from '../label'
	import FormCheckbox from './FormCheckbox.svelte'

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
	export let items: Array<any> | object | undefined = undefined

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

	let forwardEvents = forwardEventsBuilder(get_current_component())

	const dispatch = createEventDispatcher()

	function onChange(event: any, option: any) {
		const filtered = value?.filter((key) => key !== toValue(getKey(option))) ?? []
		if (event.target.checked) {
			value = filtered.concat([toValue(getKey(option))])
		} else {
			value = filtered
		}
		dispatch('changed', value)
	}

	$: ({ options, getKey, toValue, getText, isSelected } = createOptions({ items, key, text }))
	$: classes = classname('form-checkbox-group', null, $$props.class)
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
				{forwardEvents}
				class={classes}
				{inline}
				label={getText(option)}
				on:change={(event) => onChange(event, option)}
				value={isSelected(option, value)} />
		{/each}
	{/if}
{/if}
