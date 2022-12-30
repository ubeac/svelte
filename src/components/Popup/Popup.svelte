<script lang="ts">
	import { onDestroy, onMount, tick } from 'svelte/internal'

	import { createPopper } from '@popperjs/core'
	import type { Instance } from '@popperjs/core'

	import { El, type PopupProps } from '$lib/components'

	type $$Props = PopupProps

	export let cssPrefix: $$Props['cssPrefix'] = 'popup'
	export let tag: $$Props['tag'] = 'div'

	/**
	 * Disable Popup's functionality
	 */
	export let disabled: $$Props['disabled'] = false

	/**
	 * Open Popup in Fixed position of the page
	 */
	export let fixedPosition: $$Props['fixedPosition'] = false

	/**
	 * Forward all native Events
	 */
	export let forwardEvents: $$Props['forwardEvents'] = forwardEventsBuilder(get_current_component())

	/**
	 * Distance between Popup and target element
	 */
	export let popupOffset: $$Props['popupOffset'] = [0, 16]

	/**
	 * Do not close popup when user clicked inside of it
	 */
	export let persistent: $$Props['persistent'] = undefined

	/**
	 * Set where the Popup should be opened (relative to target element)
	 */
	export let placement: $$Props['placement'] = 'auto'

	/**
	 * Set which actions should be responsible for opening/closing the Popup
	 */
	export let trigger: $$Props['trigger'] = ['focus', 'hover']

	let instance: Instance
	let element: HTMLElement

	let hidden: boolean = true

	$: if (typeof trigger === 'string') trigger = [trigger]

	$: options = {
		placement,
		strategy: fixedPosition ? 'fixed' : 'absolute',
		modifiers: [
			{
				name: 'preventOverflow',
				options: {
					boundary: 'clippingParents',
				},
			},
			{
				name: 'offset',
				options: {
					popupOffset,
				},
			},
		],
	}

	$: options && rebind()

	function eventsName() {
		const events = []

		if (trigger!.includes('click')) events.push(['', 'click'])

		if (trigger!.includes('focus')) events.push(['blur', 'focus'])

		if (trigger!.includes('hover')) events.push(['mouseleave', 'mouseenter'])

		return events
	}

	function bind() {
		if (disabled) return
		if (typeof window != 'undefined') document.addEventListener('click', onOutside)
		eventsName().map(([hide, show]) => {
			element?.previousElementSibling?.addEventListener(hide, onHide)
			element?.previousElementSibling?.addEventListener(show, onShow)
		})
	}

	function unbind() {
		if (typeof window != 'undefined') document.removeEventListener('click', onOutside)
		eventsName().map(([hide, show]) => {
			element?.previousElementSibling?.removeEventListener(hide, onHide)
			element?.previousElementSibling?.removeEventListener(show, onShow)
		})
	}

	function rebind() {
		bind()
		unbind()
	}

	function onHide(event?: Event) {
		const run = () => {
			instance?.destroy()
			hidden = true
		}

		if (!event) return run()

		if (persistent) return

		setTimeout(run, 150)
	}

	function onOutside(event: Event) {
		if (!persistent) return
		if (hidden) return
		if (event.composedPath().some((path) => path == element || path == element?.previousElementSibling)) return
		instance?.destroy()
		hidden = true
	}

	function onShow() {
		if (!hidden) return onHide()
		hidden = false

		tick().then(() => {
			instance = createPopper(element?.previousElementSibling!, element, options as any)
		})
	}

	onMount(bind)

	onDestroy(unbind)

	$: cssProps = {
		//
	}
</script>

<El {...$$restProps} bind:element display={hidden ? 'none' : 'block'} {cssProps} {cssPrefix} {tag}>
	<slot />
</El>
