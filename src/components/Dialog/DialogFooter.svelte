<script lang="ts">
	import type { DialogFooterProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = DialogFooterProps

	export let cssPrefix: $$Props['cssPrefix'] = 'dialog-footer'
	export let tag: $$Props['tag'] = 'div'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
