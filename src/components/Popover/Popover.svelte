<script lang="ts">
	import type { PopoverProps } from '$lib/components'

	import Popup from '../Popup/Popup.svelte'
	import PopupArrow from '../Popup/PopupArrow.svelte'

	type $$Props = PopoverProps

	/**
	 * Set Css Prefix for the Popover
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'popover'

	/**
	 * Set tag for the Popover
	 */
	export let tag: $$Props['tag'] = 'div'

	$: props = {
		cssPrefix,
		tag,
	}
</script>

<Popup {...$$restProps} {...props}>
	<PopupArrow cssPrefix="{cssPrefix}-arrow" />
	<slot />
</Popup>
