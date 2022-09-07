<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Checkbox } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname, condition, createOptions } from '$lib/utils'

	/**
	 * Set the color of checkbox when it is checked
	 */
	export let color: Colors = 'primary'
	/**
	 * TODO
	 */
	export let group: any = []

	/**
	 * Set checkbox group to show in a row
	 */
	export let inline: boolean = false

	/**
	 * The key in the items that each checkbox is related to
	 */
	export let key: string = 'key'

	/**
	 * Checkbox group items
	 */
	export let items: any[] = []

	/**
	 * Set the field that should be used as each checkbox label
	 */
	export let text: string = 'text'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: ({ options, getKey, getText, isSelected } = createOptions({ items, key, text }))
	$: classes = classname('checkbox-group', { inline }, $$props.class, true)
</script>

{#if condition($$props)}
	<div class={classes}>
		{#each $options as option}
			<Checkbox
				bind:group
				{forwardEvents}
				label={getText(option)}
				value={getKey(option)}
				checked={isSelected(option, group)}
				{color} />
		{/each}
	</div>
{/if}
