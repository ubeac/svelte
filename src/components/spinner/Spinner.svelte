<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let color: Colors = undefined

	/**
	 * TODO
	 */
	export let size: 'sm' | 'md' = 'sm'

	/**
	 * TODO
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
