<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Moves items closer to each other
	 */
	export let stacked: boolean = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'avatar-group',
		{
			stacked,
		},
		$$props.class
	)
</script>

<div use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</div>
