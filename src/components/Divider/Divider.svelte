<script lang="ts">
	import { type DividerProps, El } from '$lib/components/index.js'

	type $$Props = DividerProps

	/**
	 * Set Css Prefix for the Divider
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'divider'

	/**
	 * Set color of Divider
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * Set direction of Divider
	 */
	export let direction: $$Props['direction'] = undefined

	/**
	 * Set alignment of Divider
	 */
	export let alignment: $$Props['alignment'] = undefined

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			alignment,
			color,
			direction,
		}
		otherProps = {
			cssPrefix,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<slot />
</El>
