<script lang="ts">
	import type { MenuProps } from '$lib/components'

	import Popup from '../Popup/Popup.svelte'

	type $$Props = MenuProps

	/**
	 * Set Css Prefix for the Menu
	 * @default menu
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'menu'

	export let trigger: $$Props['trigger'] = ['click']

	$: props = {
		cssPrefix,
		trigger,
		cssProps: {
			//
		},
	}
</script>

<Popup {...$$restProps} {...props}>
	<slot />
</Popup>
