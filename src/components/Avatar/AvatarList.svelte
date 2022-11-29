<script lang="ts">
	import { El } from '$lib/components'

	import type { AvatarListProps } from './AvatarList.types'

	type $$Props = AvatarListProps

	export let cssPrefix: $$Props['cssPrefix'] = 'avatar-list'
	export let stacked: $$Props['stacked'] = undefined

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			stacked,
		}
		otherProps = {
			cssPrefix,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<slot />
</El>
