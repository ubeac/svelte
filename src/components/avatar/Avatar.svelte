<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@app/directives'
	import type { Colors } from '@app/types'
	import { classnameNew, condition } from '@app/utils'

	/**
	 * Set color of Avatar
	 */
	export let color: Colors = undefined

	/**
	 * Set shape of Avatar
	 */
	export let shape: 'circle' | 'round' | 'tile' = 'round'

	/**
	 * Set size of Avatar
	 */
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classnameNew(
		'avatar',
		{
			color,
			shape,
			size,
		},
		$$props.class
	)
</script>

{#if condition($$props)}
	<span use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</span>
{/if}
