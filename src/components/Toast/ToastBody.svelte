<script lang="ts">
	import { El, type ToastBodyProps } from '$lib/components/index.js'

	type $$Props = ToastBodyProps

	export let cssPrefix: $$Props['cssPrefix'] = 'toast-body'
	export let tag: $$Props['tag'] = 'div'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
