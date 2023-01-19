<script lang="ts">
	import { type DialogBodyProps, El } from '$lib/index.js'

	type $$Props = DialogBodyProps

	export let cssPrefix: $$Props['cssPrefix'] = 'dialog-body'
	export let tag: $$Props['tag'] = 'div'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
