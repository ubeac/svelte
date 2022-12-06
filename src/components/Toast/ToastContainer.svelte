<script lang="ts">
	import { El } from '$lib/components'

	import type { ToastContainerProps } from './Toast.types'

	type $$Props = ToastContainerProps

	export let cssPrefix: $$Props['cssPrefix'] = 'toast-container'
	export let tag: $$Props['tag'] = 'div'

	$: cssProps = {
		//
	}
</script>

<El {...$$restProps} {cssPrefix} {cssProps} {tag}>
	<slot />
</El>
