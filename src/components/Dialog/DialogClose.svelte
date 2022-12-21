<script lang="ts">
	import { getContext } from 'svelte'

	import { El } from '../Base'
	import type { DialogCloseProps, DialogContext } from './Dialog.types'

	type $$Props = DialogCloseProps

	export let tag: $$Props['tag'] = 'button'
	export let cssPrefix: $$Props['cssPrefix'] = 'dialog-close'

	const context: DialogContext = getContext('DIALOG')

	$: props = {
		'type': 'button',
		tag,
		cssPrefix,
		'aria-label': 'Close',
	}
</script>

{#if !!context}
	<El {...$$restProps} {...props} on:click={() => context.hide(true)} />
{/if}
