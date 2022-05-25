<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'

	/**
	 * Set text position
	 */
	export let placement: 'start' | 'center' | 'end' = 'center'

	/**
	 * Set style of the divider line
	 */
	export let type: 'solid' | 'dashed' | 'dotted' = 'solid'

	/**
	 * Set Divider variant
	 */
	export let variant: 'middle' | 'inset' | 'full' = 'full'

	/**
	 * Split views vertically
	 */
	export let vertical: boolean = false

	/**
	 * Thickness of divider line
	 */
	export let width: 'medium' | 'thick' | 'thin' = 'thin'

	$: classes = {
		empty: !$$slots['default'],
		horizontal: !vertical,
		placement,
		type,
		variant,
		vertical,
		width,
	}
</script>

<Root element="div" {classes} component={get_current_component()} componentName="Divider" {...$$restProps}>
	<slot />
</Root>
