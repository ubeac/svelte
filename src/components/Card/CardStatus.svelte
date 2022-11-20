<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	import type { CardStatusPositions, CardStatusSizes } from './Card.types'

	/**
	 * You can use color property to change status's border color
	 */
	export let color: Colors = 'default'

	/**
	 * You can set position of status using position property
	 */
	export let position: CardStatusPositions = undefined

	/**
	 * If you want to change size of Status, use size property
	 */
	export let size: CardStatusSizes = 'md'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'card-status',
		{
			color,
			position,
			size,
		},
		$$props.class,
		true
	)
</script>

<div use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</div>
