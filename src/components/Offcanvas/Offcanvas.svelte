<script lang="ts">
	import { browser } from '$app/environment'
	import { El } from '$lib/components'
	import type { OffcanvasProps } from '$lib/components'

	type $$Props = OffcanvasProps

	/**
	 * Set Css Prefix for the Offcanvas
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'offcanvas'

	/**
	 * Set Html tag for the Offcanvas
	 */
	export let tag: $$Props['tag'] = 'div'

	/**
	 * Set Offcanvas placement
	 */
	export let placement: $$Props['placement'] = undefined

	/**
	 * Allow body scrolling while offcanvas is open
	 */
	export let scroll: $$Props['scroll'] = undefined

	/**
	 * Apply a backdrop on body while offcanvas is open
	 */
	export let backdrop: $$Props['backdrop'] = undefined

	/**
	 * Closes the offcanvas when escape key is pressed
	 */
	export let keyboard: $$Props['keyboard'] = undefined

	/**
	 * You can show and hide the offcanvas
	 */
	export let show: $$Props['show'] = false

	$: cssProps = {
		placement,
		show,
		keyboard,
	}
	$: otherProps = { backdrop, scroll, tag, cssPrefix }

	$: if (browser) {
		if (show && backdrop && !scroll) {
			document.body.classList.add('u-noscroll')
		} else {
			document.body.classList.remove('u-noscroll')
		}
	}

	const onKeyUp = (e) => {
		if (keyboard) {
			if (e.code == 'Escape') {
				show = false
			}
		}
	}
</script>

<svelte:window on:keyup|preventDefault={onKeyUp} />

{#if show}
	{#if backdrop}
		<El cssPrefix="{cssPrefix}-backdrop" />
	{/if}
	<El {...$$restProps} {cssProps} {...otherProps}>
		<slot />
	</El>
{/if}
