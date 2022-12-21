<script lang="ts">
	import { El } from '../Base'
	import type { DialogBodyProps } from './Dialog.types'

	type $$Props = DialogBodyProps

	export let cssPrefix: $$Props['cssPrefix'] = 'dialog-body'
	export let tag: $$Props['tag'] = 'div'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>