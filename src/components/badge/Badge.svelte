<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'
	import type { Colors, PlacementEdge } from '@app/types'

	/**
	 * Set color of Badge
	 */
	export let color: Colors = undefined

	/**
	 * Show badge as small dot
	 */
	export let dot: boolean = false

	/**
	 * Set a redirect url for badge
	 */
	export let href: string | undefined = undefined

	/**
	 * Draws Outlined Badge
	 */
	export let outline: boolean = false

	/**
	 *
	 */
	export let overlap: boolean = false

	/**
	 * Set position of badge
	 */
	export let placement: PlacementEdge = undefined

	/**
	 * Draw badge with rounded corners
	 */
	export let round: boolean = false

	/**
	 * reduce background color's opacity
	 */
	export let soft: boolean = false

	/**
	 * Disable roundness of Badge borders
	 */
	export let tile: boolean = false

	$: classes = {
		color,
		dot,
		href,
		outline,
		overlap,
		placement,
		round,
		soft,
		tile,
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
