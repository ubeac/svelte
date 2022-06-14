<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@app/directives'
	import type { Colors } from '@app/types'
	import { classnameNew, condition } from '@app/utils'

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

	$: classes = classnameNew(
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
