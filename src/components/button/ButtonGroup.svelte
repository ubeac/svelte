<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Stick buttons to each other
	 */
	export let compact: boolean = false

	/**
	 * Align buttons vertically, default is horizontal
	 */
	export let vertical: boolean = false

	/**
	 * Set buttons to be wrapped if needed
	 */
	export let wrap: boolean = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'button-group',
		{
			compact,
			horizontal: !vertical,
			vertical,
			wrap,
		},
		$$props.class
	)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
