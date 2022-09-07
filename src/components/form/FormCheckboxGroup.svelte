<script lang="ts">
	import { get_current_component } from 'svelte/internal'

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
	 * Binding result of selected items
	 */
	export let group: any = []

	/**
	 * Show Checkboxes in horizontal line
	 */
	export let inline: boolean = false

	/**
	 * Checkbox group items
	 */
	export let items: Items = undefined

	/**
	 * The key in the items that each checkbox is related to
	 */
	export let key: string | undefined = 'key'

	/**
	 * If items is array of objects, you should set text prop to an existing field in objects
	 */
	export let text: string | undefined = 'text'

	$: ({ options, getKey, getText } = createOptions({ items, key, text }))

	$: classes = classname('form-checkbox-group', undefined, $$props.class, true)
</script>

{#if condition($$props)}
	{#each $options as option}
		<FormCheckbox
			class={classes}
			bind:group
			{inline}
			{color}
			{forwardEvents}
			label={getText(option)}
			value={getKey(option)}
			disabled={option.disabled}
			description={option.description ?? undefined}
			descriptionColor={option.descriptionColor ?? 'default'}
			{...$$restProps} />
	{/each}
{/if}
