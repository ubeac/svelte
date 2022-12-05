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
