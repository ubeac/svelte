<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@app/directives'
	import { classnameNew, condition } from '@app/utils'

	/**
	 * Moves items closer to each other
	 */
	export let stacked: boolean = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classnameNew(
		'avatar-group',
		{
			stacked,
		},
		$$props.class
	)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
