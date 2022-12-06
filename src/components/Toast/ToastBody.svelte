<script lang="ts">
	import { El } from '$lib/components'

	import type { ToastBodyProps } from './Toast.types'

	type $$Props = ToastBodyProps

	export let cssPrefix: $$Props['cssPrefix'] = 'toast-body'
	export let tag: $$Props['tag'] = 'div'

	$: cssProps = {
		//
	}
</script>

<El {...$$restProps} {cssPrefix} {cssProps} {tag}>
	<slot />
</El>
