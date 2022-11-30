<script lang="ts">
	import { El, Icon } from '$lib/components'

	import type { StampProps } from './Stamp.types'

	type $$Props = StampProps

	export let cssPrefix: $$Props['cssPrefix'] = 'stamp'
	/**
	 * You can use color property to change status's border color
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * You can set position of status using position property
	 */
	export let iconPosition: $$Props['iconPosition'] = undefined

	/**
	 * If you want to change size of Status, use size property
	 */
	export let size: $$Props['size'] = 'md'

	/**
	 * You can set stamp icon using icon property
	 */
	export let icon: $$Props['icon'] = undefined

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			size,
			iconPosition,
			color,
		}
		otherProps = {
			cssPrefix,
			icon,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<Icon name={icon} />
</El>
