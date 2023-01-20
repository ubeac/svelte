<script lang="ts">
	import { setContext } from 'svelte/internal'

	import { classname, type DialogProps, El } from '$lib/components'

	type $$Props = DialogProps

	/**
	 * Make page's color Dimmer
	 */
	export let backdrop: $$Props['backdrop'] = true

	/**
	 * TODO
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'dialog'

	/**
	 * TODO
	 */
	export let tag: $$Props['tag'] = 'div'

	/**
	 * set position relative to it's parent (instead of entire screen)
	 */
	export let absolute: $$Props['absolute'] = undefined

	/**
	 * Controls open/close state of Dialog
	 */
	export let open: $$Props['open'] = undefined

	/**
	 * Do not close dialog if user clicked outside of Dialog Component
	 */
	export let persistent: $$Props['persistent'] = undefined

	/**
	 * Set position of Dialog
	 */
	export let placement: $$Props['placement'] = 'top'

	/**
	 * Makes dialog's body scrollable
	 */
	export let scrollable: $$Props['scrollable'] = undefined

	/**
	 * Changes width of Dialog
	 */
	export let size: $$Props['size'] = 'md'

	function hide(force = false) {
		if (!force && persistent) return
		open = false
	}

	setContext('DIALOG', { hide })

	$: if (typeof window !== 'undefined') {
		if (open) {
			document.body.classList.add(classname('body-dialog-open') ?? '')
		} else {
			if (document.body.classList.contains(classname('body-dialog-open') ?? '')) {
				document.body.classList.remove(classname('body-dialog-open') ?? '')
			}
		}
	}

	$: cssProps = {
		placement,
		scrollable,
		size,
		open,
		absolute,
	}
</script>

<El {...$$restProps} {tag} {cssPrefix} {cssProps} on:click={() => hide()}>
	<El cssPrefix="{cssPrefix}-container">
		<slot />
	</El>
</El>

{#if backdrop}
	<El cssPrefix="{cssPrefix}-backdrop" cssProps={{ open, absolute }} />
{/if}
