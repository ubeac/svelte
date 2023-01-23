<script lang="ts">
	import type { DialogTitleProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = DialogTitleProps

	export let cssPrefix: $$Props['cssPrefix'] = 'dialog-title'
	export let tag: $$Props['tag'] = 'div'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
