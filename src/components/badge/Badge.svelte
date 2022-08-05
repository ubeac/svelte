<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname, condition } from '$lib/utils'

	import type { BadgeShapes } from './badge.types'

	/**
	 * Set color of Badge
	 */
	export let color: Colors = undefined

	/**
	 * Show badge as small dot
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
	 * Draws Outlined Badge
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
			color,
			dot,
			ghost,
			href,
			outline,
			shape,
		},
		$$props.class
	)
</script>

{#if condition($$props)}
	<svelte:element this={href ? 'a' : 'span'} use:forwardEvents {...$$restProps} class={classes}>
		{#if !dot}
			<slot />
		{/if}
	</svelte:element>
{/if}
