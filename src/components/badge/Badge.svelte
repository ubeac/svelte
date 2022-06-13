<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'
	import type { Colors } from '@app/types'

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
	 * TODO
	 */
	export let placement: string = false

	/**
	 * You can change shape of badge using round property
	 */
	export let shape: 'round' | 'tile' | undefined = undefined

	$: classes = {
		color,
		dot,
		ghost,
		href,
		outline,
		placement,
		shape,
	}
</script>

<Root
	element={href ? 'a' : 'span'}
	{href}
	{classes}
	component={get_current_component()}
	componentName="Badge"
	{...$$restProps}>
	{#if !dot}
		<slot />
	{/if}
</Root>
