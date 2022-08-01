<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname, condition } from '$lib/utils'

	import type { ButtonShapes, ButtonSizes } from './button.types'

	/**
	 * Make the button fit to its parent width
	 */
	export let block: boolean = false

	/**
	 * Set color of button
	 */
	export let color: Colors = 'default'

	/**
	 * Set disabled state of button
	 */
	export let disabled: boolean = false

	/**
	 * TODO: Set elevation level of button (not implemented yet!). Eleveation is not supported in Tabler.
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
	export let shape: ButtonShapes = 'default'

	/**
	 * Set the size of button
	 */
	export let size: ButtonSizes = 'md'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	let ref: HTMLElement

	$: icon = ref && (!ref.textContent || !ref.textContent.trim())

	$: classes = classname(
		'button',
		{
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
		},
		$$props.class,
		true
	)
</script>

{#if condition($$props)}
	<svelte:element
		this={href ? 'a' : 'button'}
		{href}
		bind:this={ref}
		use:forwardEvents
		{...$$restProps}
		class={classes}>
		<slot />
	</svelte:element>
{/if}
