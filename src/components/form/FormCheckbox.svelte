<script lang="ts">
	import { createEventDispatcher, get_current_component } from 'svelte/internal'

	import { Checkbox } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname, condition } from '$lib/utils'

	/**
	 * set color of checkbox
	 */
	export let color: Colors = 'default'
	/**
	 * Description of checkbox
	 */
	export let description: string | undefined = undefined
	/**
	 * Description of checkbox
	 */
	export let descriptionColor: Colors = 'default'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Show multiple Checkboxes in same horozontal line
	 */
	export let inline: boolean = false

	/**
	 * label for checkbox
	 */
	export let label: string | undefined = undefined

	/**
	 * Show checked state of checkbox
	 */
	export let value: boolean = false

	const dispatch = createEventDispatcher()

	$: classes = classname('form-checkbox', { inline }, $$props.class, true)
</script>

{#if condition($$props)}
	<div class={classes}>
		<Checkbox
			bind:value
			{forwardEvents}
			{...$$restProps}
			{color}
			{label}
			on:change={(event) => dispatch('changed', event.detail)} />
		{#if description}
			<span class={classname('form-checkbox-description', { descriptionColor })}>
				{description}
			</span>
		{/if}
	</div>
{/if}
