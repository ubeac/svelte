<script lang="ts">
	import type { ToastContainerProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = ToastContainerProps

	export let cssPrefix: $$Props['cssPrefix'] = 'toast-container'
	export let tag: $$Props['tag'] = 'div'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
