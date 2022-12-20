<script lang="ts">
	import { El } from '../Base'
	import type { DialogContentProps } from './Dialog.types'

	type $$Props = DialogContentProps

	export let cssPrefix: $$Props['cssPrefix'] = 'dialog-content'
	export let tag: $$Props['tag'] = 'div'

	function onClick(e) {
		e.stopPropagation()
	}
</script>

<El {...$$restProps} {cssPrefix} {tag} on:click={onClick}>
	<slot />
</El>
