<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors, Items } from '$lib/types'
	import { classname, createOptions } from '$lib/utils'

	import { FormCheckbox } from '../form'

	/**
	 * Set the color of checkbox when it is checked
	 */
	export let color: Colors = 'primary'

	/**
	 * Set checkbox group to show in a row
	 */
	export let inline: boolean = false

	/**
	 * Checkbox group items
	 */
	export let items: Items = []

	/**
	 * The key in the items that each checkbox is related to
	 */
	export let key: string = 'key'

	/**
	 * Set the field that should be used as each checkbox label
	 */
	export let text: string = 'text'

	/**
	 * Binding result of selected items
	 */
	export let value: any = []

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: ({ options, getKey, getText } = createOptions({ items, key, text }))
	$: classes = classname('checkbox-group', $$props.class, true)
</script>

<div class={classes}>
	{#each $options as option}
		<FormCheckbox bind:group={value} {inline} {forwardEvents} label={getText(option)} key={getKey(option)} {color} />
	{/each}
</div>
