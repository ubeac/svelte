<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Radio, Label } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'
	import type { Colors } from '$lib/types';

	/**
	 * Description for Radio button
	 */
	export let description: string | undefined = undefined

	/**
	 * value of Selected radio button
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
	/**
	 * Color of Radio button
	 */
	export let color: Colors = "default"

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('form-radio', { inline }, $$props.class)
</script>

{#if condition($$props)}
	<Label class={classes}>
		<Radio bind:group {forwardEvents} {...$$restProps} {color} />
		{#if label}
			<span class={classname('form-radio-label')}>{label}</span>
		{/if}
		{#if description}
			<span class={classname('form-radio-description')}>
				{description}
			</span>
		{/if}
	</Label>
{/if}
