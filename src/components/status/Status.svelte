<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname, condition } from '$lib/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 *  animated of dot status
	 */
	export let animated: boolean = false
	/**
	 * The color of status
	 */
	export let color: Colors = 'default'
	/**
	 * The type of status
	 */
	export let dot: boolean = false

	$: classes = classname(
		'status',
		{
			animated,
			color,
			dot,
		},
		$$props.class,
		true
	)
</script>

{#if condition($$props)}
	<span use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</span>
{/if}
