<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	import type { BadgeShapes } from './badge.types'

	/**
	 * Set color of Badge
	 */
	export let color: Colors = 'default'

	/**
	 * Show badge as small dot. If true, default slot will be ignored.
	 */
	export let dot: boolean = false

	/**
	 * reduce background color's opacity
	 */
	export let ghost: boolean = false

	/**
	 * Set a redirect url for badge
	 */
	export let href: string | undefined = undefined

	/**
	 * Draws outlined badge
	 */
	export let outline: boolean = false

	/**
	 * You can change shape of badge using round property
	 */
	export let shape: BadgeShapes = 'default'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'badge',
		{
			[color!]: !!color,
			dot,
			ghost,
			outline,
			shape,
		},
		$$props.class,
		true
	)
</script>

<svelte:element this={href ? 'a' : 'span'} {href} use:forwardEvents {...$$restProps} class={classes}>
	{#if !dot}
		<slot />
	{/if}
</svelte:element>
