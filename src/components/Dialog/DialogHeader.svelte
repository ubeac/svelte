<script lang="ts">
	import type { DialogHeaderProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = DialogHeaderProps

	export let cssPrefix: $$Props['cssPrefix'] = 'dialog-header'
	export let tag: $$Props['tag'] = 'div'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
