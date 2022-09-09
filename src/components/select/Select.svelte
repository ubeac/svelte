<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, createOptions } from '$lib/utils'

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
	export let value: any[]

	let forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('select', undefined, $$props.class, true)

	$: ({ getKey, getText } = createOptions({ items, key, text }))
</script>

{#if multiple}
	<select bind:value multiple use:forwardEvents class={classes}>
		{#each items as item}
			<option value={getKey(item)}>
				{getText(item)}
			</option>
		{/each}
	</select>
{:else}
	<select bind:value use:forwardEvents {...$$restProps} class={classes}>
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
