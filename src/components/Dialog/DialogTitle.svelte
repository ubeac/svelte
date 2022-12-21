<script lang="ts">
	import { El } from '../Base'
	import type { DialogTitleProps } from './Dialog.types'

	type $$Props = DialogTitleProps

	export let cssPrefix: $$Props['cssPrefix'] = 'dialog-title'
	export let tag: $$Props['tag'] = 'div'
</script>

<El {...$$restProps} {cssPrefix} {tag}>
	<slot />
</El>
