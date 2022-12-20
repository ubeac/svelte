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

	onMount(() => {
		const handleOutsideClick = (event: any) => {
			if (element && backdrop && !element.contains(event.target) && !event.defaultPrevented) {
				close()
			}
		}

		const handleEscapeKey = (event: any) => {
			if (element && autoClose && event.key === 'Escape' && !event.defaultPrevented) {
				close()
			}
		}
		if (element && autoClose) {
			document.addEventListener('click', handleOutsideClick, true)
			document.addEventListener('keyup', handleEscapeKey, true)
			return () => {
				document.removeEventListener('click', handleOutsideClick, true)
				document.removeEventListener('keyup', handleEscapeKey, true)
			}
		}
	})

	$: {
		props = { cssPrefix, ...$$restProps }
		cssProps = { placement, show }
	}
</script>

<El {...props} {cssProps} bind:element>
	<slot />
</El>
{#if show}
	{#if backdrop}
		<El cssPrefix="{cssPrefix}-backdrop" />
	{/if}
	{#if noScroll}
		<El cssPrefix="{cssPrefix}-no-scroll" />
	{/if}
{/if}
