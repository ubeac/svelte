<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname, condition } from '$lib/utils'

	import type { CardStampPlacements, CardStampSizes } from './card.types'

	/**
	 * if you want to change color of Stamp, use the color property
	 */
	export let color: Colors = 'default'

	/**
	 * you can change position of Stamp by changing placement property
	 */
	export let placement: CardStampPlacements = 'top-end'

	/**
	 * You can chnage size of Stamp by changing size property
	 */
	export let size: CardStampSizes = 'md'

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
