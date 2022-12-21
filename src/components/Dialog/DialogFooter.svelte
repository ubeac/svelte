<script lang="ts">
	import { El } from '../Base'
	import type { DialogFooterProps } from './Dialog.types'

	type $$Props = DialogFooterProps

	export let cssPrefix: $$Props['cssPrefix'] = 'dialog-footer'
	export let tag: $$Props['tag'] = 'div'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
