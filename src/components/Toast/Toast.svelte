<script lang="ts">
	import { El } from '$lib/components'

	import type { ToastProps } from './Toast.types'

	type $$Props = ToastProps

	export let cssPrefix: $$Props['cssPrefix'] = 'toast'
	export let tag: $$Props['tag'] = 'div'

	/**
	 * Show or hide toast
	 */
	export let show: $$Props['show'] = false

	$: cssProps = {
		show,
	}
</script>

<El {...$$restProps} {cssPrefix} {cssProps} {tag}>
	<slot />
</El>
