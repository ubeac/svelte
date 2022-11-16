<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	import type { AvatarShapes, AvatarSizes } from './Avatar.types'

	/**
	 * Set color for Avatar
	 */
	export let color: Colors = 'default'

	/**
	 * Set image for Avatar
	 */
	export let image: string | undefined = undefined

	/**
	 * Set shape for Avatar: 'circle', 'round', 'tile'
	 */
	export let shape: AvatarShapes = 'round'

	/**
	 * Set size for Avatar: 'xs', 'sm', 'ep', 'md', 'lg', 'xl'
	 */
	export let size: AvatarSizes = 'ep'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: style = image ? `background-image: url(${image})` : null

	$: classes = classname(
		'avatar',
		{
			[color!]: !!color,
			shape,
			size,
		},
		$$props.class,
		true
	)
</script>

<span use:forwardEvents {...$$restProps} class={classes} {style}>
	<slot />
</span>
