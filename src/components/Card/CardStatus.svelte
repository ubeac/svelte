<script lang="ts">
	import { El } from '$lib/components'

	import type { CardStatusProps } from './Card.types'

	type $$Props = CardStatusProps

	export let cssPrefix: $$Props['cssPrefix'] = 'card-status'
	/**
	 * You can use color property to change status's border color
	 */
	export let color: $$Props['color'] = 'primary'

	/**
	 * You can set position of status using position property
	 */
	export let colorPosition: $$Props['colorPosition'] = undefined

	/**
	 * If you want to change size of Status, use size property
	 */
	export let size: $$Props['size'] = 'md'

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			size,
			colorPosition,
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
