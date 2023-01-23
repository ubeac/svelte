<script lang="ts">
	import type { ButtonGroupProps } from '$lib/components'

	import El from '../El/El.svelte'

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
	 * Align buttons vertically, default is horizontal
	 */
	export let vertical: $$Props['vertical'] = undefined

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			size,
			vertical,
		}
		otherProps = {
			cssPrefix,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps} role="group">
	<slot />
</El>
