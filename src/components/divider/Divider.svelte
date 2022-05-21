<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Root } from '@app/components'

	/**
	 * TODO
	 */
	export let placement: 'start' | 'center' | 'end' = 'center'

	/**
	 * TODO
	 */
	export let type: 'solid' | 'dashed' | 'dotted' = 'solid'

	/**
	 * TODO
	 */
	export let variant: 'middle' | 'inset' | 'full' = 'full'

	/**
	 * TODO
	 */
	export let vertical: boolean = false

	/**
	 * TODO
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
