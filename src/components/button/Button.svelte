<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'
	import type { Colors } from '@app/types'

	/**
	 * Make the button fit to its parent width
	 */
	export let block: boolean = false

	/**
	 * Set color of button
	 */
	export let color: Colors = undefined

	/**
	 * Set disabled state of button
	 */
	export let disabled: boolean = false

	/**
	 * Disable button's shadow
	 */
	export let flat: boolean = false

	/**
	 * Set redirect url for link button
	 */
	export let href: undefined | string = undefined

	/**
	 * Show loading spinner inside button
	 */
	export let loading: boolean = false

	/**
	 * Draws outlined Buttons with transparent background
	 */
	export let outline: boolean = false

	/**
	 * Set the size of button
	 */
	export let size: 'sm' | 'md' | 'lg' = 'md'

	/**
	 * Only show text of button with trasnparent background and border
	 */
	export let text: boolean = false

	/**
	 * Disable roundness of button's border
	 */
	export let tile: boolean = false

	$: classes = {
		block,
		[color || '']: true,
		disabled,
		flat,
		loading,
		outline,
		size,
		text,
		tile,
	}
</script>

<Root
	element={href ? 'a' : 'button'}
	{classes}
	component={get_current_component()}
	componentName="Button"
	{href}
	{...$$restProps}>
	<slot />
</Root>
