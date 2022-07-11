<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname, condition } from '$lib/utils'

	/**
	 * The color of spinner
	 */
	export let color: Colors = undefined

	/**
	 * Sets the size of component
	 */
	export let size: 'sm' | 'md' = 'sm'

	/**
	 * You can choose a style for spinner using style property
	 */
	export let style: 'border' | 'grow' = 'border'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'spinner',
		{
			color,
			size,
			style,
		},
		$$props.class
	)
</script>

{#if condition($$props)}
	<div role="status" use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
