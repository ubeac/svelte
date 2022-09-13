<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Radio } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	/**
	 * Color of Radio button
	 */
	export let color: Colors = 'default'
	/**
	 * Description for Radio button
	 */
	export let description: string | undefined = undefined

	/**
	 * Description Color for Radio button
	 */
	export let descriptionColor: Colors = 'default'

	/**
	 * Align multiple Radio buttons in a single horizontal line
	 */
	export let inline: boolean = false

	/**
	 * Label of Radio button
	 */
	export let label: string | undefined = undefined

	/**
	 * Forwards All native events.
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Value of Radio
	 */
	export let value: boolean = false

	$: classes = classname('form-radio', { inline }, $$props.class)
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class={classes}>
	<Radio bind:value {forwardEvents} {...$$restProps} {inline} {color} on:changed />
	{#if label}
		<span class={classname('form-radio-label')}>
			{label}
		</span>
	{/if}
	{#if description}
		<span class={classname('form-radio-description', { color: descriptionColor })}>
			{description}
		</span>
	{/if}
</label>
