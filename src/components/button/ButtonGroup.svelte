<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let compact: boolean = false

	/**
	 * Align Buttons vertically
	 */
	export let vertical: boolean = false

	/**
	 * TODO
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
