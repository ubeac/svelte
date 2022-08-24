<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Checkbox } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'
	import type { Colors } from '$lib/types';

	/**
	 * Description of checkbox
	 */
	export let description: string | undefined = undefined

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
	export let value: boolean | undefined = undefined
	/**
	 * set color of checkbox
	 */
	export let color: Colors = "default"

	$: classes = classname('form-checkbox', { inline }, $$props.class)
</script>

{#if condition($$props)}
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class={classes}>
		<Checkbox bind:value {forwardEvents} {...$$restProps} on:changed {color} />
		{#if label}
			<span class={classname('form-checkbox-label')}>{label}</span>
		{/if}
		{#if description}
			<span class={classname('form-checkbox-description')}>
				{description}
			</span>
		{/if}
	</label>
{/if}
