<script lang="ts">
	import { type MenuProps, Popup } from '$lib/components'

	type $$Props = MenuProps

	/**
	 * Set Css Prefix for the Menu
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'menu'

	/**
	 * Set tag for the Menu
	 */
	export let tag: $$Props['tag'] = 'div'

	export let trigger: $$Props['trigger'] = ['click']

	$: props = {
		tag,
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
