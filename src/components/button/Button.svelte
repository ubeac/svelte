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
	 * TODO
	 */
	export let elevation: number = 0

	/**
	 * Only show text of button with trasnparent background and border
	 */
	export let ghost: boolean = false

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
	 * Shape of button
	 */
	export let shape: 'circle' | 'link' | 'round' | 'tile' | undefined = undefined

	/**
	 * Set the size of button
	 */
	export let size: 'sm' | 'md' | 'lg' = 'md'

	let ref: HTMLElement

	$: icon = ref && (!ref.textContent || !ref.textContent.trim())

	$: classes = {
		block,
		[color!]: !!color,
		disabled,
		elevation,
		ghost,
		icon,
		loading,
		outline,
		shape,
		size,
	}
</script>

<Root
	bind:ref
	element={href ? 'a' : 'button'}
	{classes}
	component={get_current_component()}
	componentName="Button"
	{href}
	{...$$restProps}>
	<slot />
</Root>
