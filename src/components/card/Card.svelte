<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'

	/**
	 * If you want the card to have shadow, use the elevation property
	 */
	export let elevation: number | undefined = undefined

	/**
	 * If you want the card to have border, use the outline property
	 */
	export let outline: boolean = false

	/**
	 * TODO
	 */
	export let padding: 'sm' | 'md' | 'lg' | undefined = undefined

	/**
	 * Use tile property to neutralize border-radius
	 */
	export let tile: boolean = false

	$: classes = {
		elevation,
		outline,
		padding,
		tile,
	}
</script>

<Root element="div" {classes} component={get_current_component()} componentName="Card" {...$$restProps}>
	<slot />
</Root>
