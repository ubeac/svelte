<script lang="ts">
	import { type PopoverProps, Popup, PopupArrow } from '$lib/components/index.js'

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
