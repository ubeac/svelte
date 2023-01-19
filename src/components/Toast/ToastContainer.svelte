<script lang="ts">
	import { El, type ToastContainerProps } from '$lib'

	type $$Props = ToastContainerProps

	export let cssPrefix: $$Props['cssPrefix'] = 'toast-container'
	export let tag: $$Props['tag'] = 'div'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
