<script lang="ts">
	import El from '../El/El.svelte'
	import type { RibbonProps } from './Ribbon.types'

	type $$Props = RibbonProps

	export let cssPrefix: $$Props['cssPrefix'] = 'ribbon'
	/**
	 * You can use bgColor property to change ribbon's background color
	 */
	export let bgColor: $$Props['bgColor'] = undefined

	/**
	 * You can use elementPosition to set position of ribbon
	 */
	export let elementPosition: $$Props['elementPosition'] = 'end'

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			bgColor,
			elementPosition,
		}
		otherProps = {
			cssPrefix,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<slot />
</El>
