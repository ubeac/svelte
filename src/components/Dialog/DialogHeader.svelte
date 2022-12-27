<script lang="ts">
	import { El } from '../Base'
	import type { DialogHeaderProps } from './Dialog.types'

	type $$Props = DialogHeaderProps

	export let cssPrefix: $$Props['cssPrefix'] = 'dialog-header'
	export let tag: $$Props['tag'] = 'div'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
