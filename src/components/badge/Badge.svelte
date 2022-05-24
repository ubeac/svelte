<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'
	import type { Colors, PlacementEdge } from '@app/types'

	/**
	 * TODO
	 */
	export let color: Colors = undefined

	/**
	 * TODO
	 */
	export let dot: boolean = false

	/**
	 * TODO
	 */
	export let href: string | undefined = undefined

	/**
	 * TODO
	 */
	export let outline: boolean = false

	/**
	 * TODO
	 */
	export let overlap: boolean = false

	/**
	 * TODO
	 */
	export let placement: PlacementEdge = undefined

	/**
	 * TODO
	 */
	export let round: boolean = false

	/**
	 * TODO
	 */
	export let soft: boolean = false

	/**
	 * TODO
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

<Root element="div" {classes} component={get_current_component()} componentName="Badge" {...$$restProps}>
	<slot />
</Root>
