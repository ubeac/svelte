<script lang="ts">
	import type { ToastProps } from '$lib/components'

	import El from '../El/El.svelte'

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
