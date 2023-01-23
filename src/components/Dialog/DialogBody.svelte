<script lang="ts">
	import type { DialogBodyProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = DialogBodyProps

	export let cssPrefix: $$Props['cssPrefix'] = 'dialog-body'
	export let tag: $$Props['tag'] = 'div'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
