<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname, condition } from '$lib/utils'

	/**
	 * if you want to change color of Stamp, use the color property
	 */
	export let color: Colors = undefined

	/**
	 * you can change position of Stamp by changing placement property
	 */
	export let placement: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' = 'top-end'

	/**
	 * You can chnage size of Stamp by changing size property
	 */
	export let size: 'sm' | 'md' | 'lg' = 'md'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'card-stamp',
		{
			color,
			placement,
			size,
		},
		$$props.class
	)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<div class={classname('card-stamp-icon')}>
			<slot />
		</div>
	</div>
{/if}
