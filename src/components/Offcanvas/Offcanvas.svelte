<script lang="ts">
	import { onMount, setContext } from 'svelte'

	import { El, type OffcanvasProps } from '$lib/components'

	type $$Props = OffcanvasProps

	/**
	 * Set Css Prefix for the Offcanvas
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'offcanvas'

	/**
	 * Set Offcanvas placement
	 */
	export let placement: $$Props['placement'] = 'start'

	/**
	 * Disable body scrolling while Offcanvas is open
	 */
	export let noScroll: $$Props['noScroll'] = undefined

	/**
	 * Apply a backdrop on body while Offcanvas is open
	 */
	export let backdrop: $$Props['backdrop'] = undefined

	/**
	 * Closes the Offcanvas when escape key is pressed
	 */
	export let autoClose: $$Props['autoClose'] = undefined

	/**
	 * You can show and hide the Offcanvas
	 */
	export let show: $$Props['show'] = undefined

	const close = () => {
		show = false
	}

	let element: HTMLElement
	let props: OffcanvasProps = { cssPrefix, ...$$restProps }
	let cssProps = { placement, show }

	setContext('OFFCANVAS', { close })

	const handleEscapeKey = (event: any) => {
		if (element && autoClose && event.key === 'Escape' && !event.defaultPrevented) {
			close()
		}
	}

	const handleOutsideClick = (event: any) => {
		if (element && backdrop && !element.contains(event.target) && !event.defaultPrevented) {
			close()
		}
	}

	onMount(() => {
		if (element && autoClose) {
			element.addEventListener('keyup', handleEscapeKey, true)
			return () => {
				element.removeEventListener('keyup', handleEscapeKey, true)
			}
		}
	})

	$: {
		props = { cssPrefix, ...$$restProps }
		cssProps = { placement, show }
		if (element && show) {
			window.setTimeout(function () {
				element.focus()
			}, 0)
		} else if (element && !show) {
			element.blur()
		}
	}
</script>

<El cssPrefix="{cssPrefix}-wrapper">
	<El {...props} {cssProps} bind:element tabindex="0">
		<slot />
	</El>
	{#if show}
		{#if backdrop}
			<El cssPrefix="{cssPrefix}-backdrop" on:click={handleOutsideClick} />
		{/if}
		{#if noScroll}
			<El cssPrefix="{cssPrefix}-no-scroll" />
		{/if}
	{/if}
</El>
