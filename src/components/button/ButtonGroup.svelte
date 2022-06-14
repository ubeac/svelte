<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@app/directives'
	import { classnameNew, condition } from '@app/utils'

	/**
	 * Size of buttons
	 */
	export let size: 'sm' | 'md' | 'lg' = 'md'

	/**
	 * Align Buttons vertically
	 */
	export let vertical: boolean = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classnameNew(
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
