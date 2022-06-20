<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	import { Checkbox } from '../input'

	/**
	 * Aligns multiple elements in same line
	 */
	export let inline: boolean | undefined = undefined

	/**
	 * Set label for checkbox
	 */
	export let label: string | undefined = undefined

	/**
	 * TODO
	 */
	export let required: boolean | undefined = undefined

	/**
	 * The checked state of checkbox
	 */
	export let value: boolean | undefined = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('form-checkbox', { inline }, $$props.class)
</script>

{#if condition($$props)}
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label use:forwardEvents {required} {...$$restProps} class={classes}>
		<Checkbox on:change bind:value {required} {...$$restProps} />
		{#if label}
			<span class={classname('form-checkbox-label')}>{label}</span>
		{/if}
	</label>
{/if}
