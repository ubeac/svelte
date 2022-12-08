<script lang="ts">
	import { El, type ElProps } from '../Base'
	import type { ToastHeaderProps } from './Toast.types'

	type $$Props = ToastHeaderProps

	export let cssPrefix: $$Props['cssPrefix'] = 'toast-header'
	export let tag: $$Props['tag'] = 'div'

	/**
	 * Show close button icon
	 */
	export let showCloseButton: $$Props['showCloseButton'] = true

	function remove(e: any) {
		const container = e?.path[2]
		container?.parentNode?.removeChild(container)
	}

	let buttonOtherProps: Partial<ElProps>;
	$: buttonOtherProps = {
		'tag': 'button',
		'cssPrefix': 'toast-close',
		'type': 'button',
		'data-bs-dismiss': 'toast',
		'aria-label': 'Close',
	}

	$: cssProps = {
		//
	}
</script>

<El {...$$restProps} {cssPrefix} {cssProps} {tag}>
	<slot />
	{#if showCloseButton}
		<El on:click={remove} {...buttonOtherProps} />
	{/if}
</El>
