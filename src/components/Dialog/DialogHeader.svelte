<script lang="ts">
	import { type DialogHeaderProps, El } from '$lib/components'

	type $$Props = DialogHeaderProps

	export let cssPrefix: $$Props['cssPrefix'] = 'dialog-header'
	export let tag: $$Props['tag'] = 'div'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
