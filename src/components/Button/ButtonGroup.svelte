<script lang="ts">
	// import { get_current_component } from 'svelte/internal'
	// import { forwardEventsBuilder } from '$lib/directives'
	// import { classname } from '$lib/utils'
	import { El } from '$lib/components'
	import type { ButtonGroupProps } from '$lib/components'

	type $$Props = ButtonGroupProps

	/**
	 * Set Css Prefix for the Badge
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'button-group'

	/**
	 * Set the size of the buttons
	 */
	export let size: $$Props['size'] = undefined

	/**
	 * Set the color of the buttons
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * Align buttons vertically, default is horizontal
	 */
	export let vertical: $$Props['vertical'] = undefined

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			color,
			size,
		}
		otherProps = {
			cssPrefix: vertical ? cssPrefix + '-vertical' : cssPrefix,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps} role="group">
	<slot />
</El>
