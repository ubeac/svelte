<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Size of buttons
	 */
	export let size: 'sm' | 'md' | 'lg' = 'md'

	/**
	 * Align Buttons vertically
	 */
	export let vertical: boolean = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'button-group',
		{
			horizontal: !vertical,
			size,
			vertical,
		},
		$$props.class
	)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
