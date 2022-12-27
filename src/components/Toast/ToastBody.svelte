<script lang="ts">
	import { El, type ToastBodyProps } from '$lib/components'

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
