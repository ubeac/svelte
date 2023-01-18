<script lang="ts">
	import { El } from '$lib/index.js'

	import type { AvatarProps } from './Avatar.types'

	type $$Props = AvatarProps

	export let cssPrefix: $$Props['cssPrefix'] = 'avatar'
	export let color: $$Props['color'] = 'primary'
	export let pill: $$Props['pill'] = undefined
	export let rounded: $$Props['round'] = undefined
	export let tile: $$Props['tile'] = undefined
	export let size: $$Props['size'] = 'ep'

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			color,
			size,
			pill,
			rounded,
			tile,
		}
		otherProps = {
			cssPrefix,
		}
	}
</script>

<El tag="span" {...$$restProps} {cssProps} {...otherProps}>
	<slot />
</El>
