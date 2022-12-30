<script lang="ts">
	import { El, Popup, PopupArrow, type TooltipProps } from '$lib/components'

	/**
	 * Set Css Prefix for the Tooltip
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'tooltip'

	/**
	 * Set tag for the Tooltip
	 */
	export let tag: $$Props['tag'] = 'div'

	type $$Props = TooltipProps

	$: cssProps = {
		//
	}
</script>

<Popup {...$$restProps} {cssPrefix} {cssProps} {tag}>
	<PopupArrow cssPrefix="{cssPrefix}-arrow" />
	<El cssPrefix="{cssPrefix}-inner">
		<slot />
	</El>
</Popup>
