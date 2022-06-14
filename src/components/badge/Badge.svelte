<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@app/directives'
	import type { Colors } from '@app/types'
	import { classname, condition } from '@app/utils'

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
	export let shape: 'round' | 'tile' | undefined = undefined

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
	<svelte:element this={href ? 'a' : 'span'} {href} use:forwardEvents {...$$restProps} class={classes}>
		{#if !dot}
			<slot />
		{/if}
	</svelte:element>
{/if}
