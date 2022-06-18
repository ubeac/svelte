<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let alignItems: 'flex-start' | 'center' | 'flex-end' | 'stretch' = 'stretch'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'grid',
		{
			[`align-items-${alignItems}`]: true,
		},
		$$props.class
	)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
