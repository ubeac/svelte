<script lang="ts">
	import type { TooltipProps } from '$lib/components'

	import El from '../El/El.svelte'
	import Popup from '../Popup/Popup.svelte'
	import PopupArrow from '../Popup/PopupArrow.svelte'

	/**
	 * Set Css Prefix for the Tooltip
	 * @default 'tooltip'
	 * @type string
	 * @example 'tooltip'
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'tooltip'

	/**
	 * Set Placement for the Tooltip
	 * @default 'top'
	 * @type 'top' | 'bottom' | 'left' | 'right'
	 * @example 'top'
	 */
	export let placement: $$Props['placement'] = 'top'

	type $$Props = TooltipProps
</script>

<Popup {...$$restProps} {cssPrefix} {placement}>
	<PopupArrow cssPrefix="{cssPrefix}-arrow" />
	<El cssPrefix="{cssPrefix}-inner">
		<slot />
	</El>
</Popup>
