<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Icon } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname, condition } from '$lib/utils'

	import type { CardStampPositions, CardStampSizes } from './card.types'

	/**
	 * if you want to change color of Stamp, use the color property
	 */
	export let color: Colors = 'default'

	/**
	 * Icon name for the stamp
	 */
	export let icon: string

	/**
	 * you can change position of Stamp by changing placement property
	 */
	export let position: CardStampPositions = 'top-end'

	/**
	 * You can chnage size of Stamp by changing size property
	 */
	export let size: CardStampSizes = 'md'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'card-stamp',
		{
			color,
			position,
			size,
		},
		$$props.class,
		true
	)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot><Icon name={icon} /></slot>
	</div>
{/if}
