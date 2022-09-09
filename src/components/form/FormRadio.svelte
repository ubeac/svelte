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
	 * Group of radio buttons
	 */
	export let group: any = undefined

	/**
	 * Align multiple Radio buttons in a single horizontal line
	 */
	export let inline: boolean = false

	/**
	 * Label of Radio button
	 */
	export let label: string | undefined = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('form-radio', { inline }, $$props.class)
</script>

<div class={classes}>
	<Radio bind:group {forwardEvents} {...$$restProps} {color} {label} />
	{#if description}
		<span class={classname('form-radio-description', { descriptionColor })}>
			{description}
		</span>
	{:else}
		<slot />
	{/if}
</div>
