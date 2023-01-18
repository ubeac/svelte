<script lang="ts">
	import { type DialogTitleProps, El } from '$lib/index.js'

	type $$Props = DialogTitleProps

	export let cssPrefix: $$Props['cssPrefix'] = 'dialog-title'
	export let tag: $$Props['tag'] = 'div'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
