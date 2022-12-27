<script lang="ts">
	import { El, type  ToastContainerProps } from '$lib/components'

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
