<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname, condition } from '$lib/utils'

	import type { SpinnerSizes, SpinnerStyles } from './spinner.types'

	/**
	 * The color of spinner
	 */
	export let color: Colors = 'default'

	/**
	 * Sets the size of component
	 */
	export let size: SpinnerSizes = 'sm'

	/**
	 * You can choose a style for spinner using style property
	 */
	export let style: SpinnerStyles = 'border'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'spinner',
		{
			color,
			size,
			style,
		},
		$$props.class,
		true
	)
</script>

{#if condition($$props)}
	<div role="status" use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
