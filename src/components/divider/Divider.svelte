<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@app/directives'
	import { classnameNew, condition } from '@app/utils'

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

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classnameNew(
		'divider',
		{
			empty: !$$slots['default'],
			horizontal: !vertical,
			placement,
			type,
			variant,
			vertical,
			width,
		},
		$$props.class
	)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
