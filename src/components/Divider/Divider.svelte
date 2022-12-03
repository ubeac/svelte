<!-- <script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

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

	$: classes = classname(
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
</script> -->
<script lang="ts">
	import { El } from '$lib/components'
	import type { DividerProps } from '$lib/components'

	type $$Props = DividerProps

	/**
	 * Set Css Prefix for the Divider
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'divider'

	/**
	 * Set color of Badge
	 */
	export let color: $$Props['color'] = 'secondary'

	/**
	 * Set position of Divider
	 */
	export let dividerPosition: $$Props['dividerPosition'] = undefined

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			dividerPosition,
			color,
		}
		otherProps = {
			cssPrefix,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<slot />
</El>
