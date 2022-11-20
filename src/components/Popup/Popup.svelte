<script lang="ts">
	import { get_current_component, onDestroy, onMount } from 'svelte/internal'

	import { createPopper } from '@popperjs/core'
	import type { Instance } from '@popperjs/core'

	import { forwardEventsBuilder } from '$lib/directives'

	import type { PopupPlacements, PopupTriggers } from './Popup.types'

	/**
	 * Disable Popup's functionality
	 */
	export let disabled: boolean = false

	/**
	 * Open Popup in Fixed position of the page
	 */
	export let fixed: boolean = false

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Distance between Popup and target element
	 */
	export let offset: [number, number] = [0, 8]

	/**
	 * Do not close popup when user clicked inside of it
	 */
	export let persistence: boolean = false

	/**
	 * Set where the Popup should be opened (relative to target element)
	 */
	export let placement: PopupPlacements = 'auto'

	/**
	 * Set which actions should be responsible for opening/closing the Popup
	 */
	export let trigger: PopupTriggers = ['focus', 'hover']

	let instance: Instance
	let ref: HTMLElement

	$: if (typeof trigger === 'string') trigger = [trigger]

	$: options = {
		placement,
		strategy: fixed ? 'fixed' : 'absolute',
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
					offset,
				},
			},
		],
	}

	$: options && rebind()

	function eventsName() {
		const events = []

		if (trigger.includes('click')) events.push(['', 'click'])

		if (trigger.includes('focus')) events.push(['blur', 'focus'])

		if (trigger.includes('hover')) events.push(['mouseleave', 'mouseenter'])

		return events
	}

	function bind() {
		if (disabled) return
		if (typeof window != 'undefined') document.addEventListener('click', onOutside)
		eventsName().map(([hide, show]) => {
			ref?.previousElementSibling?.addEventListener(hide, onHide)
			ref?.previousElementSibling?.addEventListener(show, onShow)
		})
	}

	function unbind() {
		if (typeof window != 'undefined') document.removeEventListener('click', onOutside)
		eventsName().map(([hide, show]) => {
			ref?.previousElementSibling?.removeEventListener(hide, onHide)
			ref?.previousElementSibling?.removeEventListener(show, onShow)
		})
	}

	function rebind() {
		bind()
		unbind()
	}

	function onHide(event?: Event) {
		const run = () => {
			instance?.destroy()
			ref.setAttribute('hidden', '')
		}

		if (!event) return run()

		if (persistence) return

		setTimeout(run, 150)
	}

	function onOutside(event: Event) {
		if (!persistence) return
		if (ref.hasAttribute('hidden')) return
		if (event.composedPath().some((path) => path == ref || path == ref?.previousElementSibling)) return
		instance?.destroy()
		ref.setAttribute('hidden', '')
	}

	function onShow() {
		if (!ref.hasAttribute('hidden')) return onHide()
		instance = createPopper(ref?.previousElementSibling!, ref, options as any)
		ref.removeAttribute('hidden')
	}

	onMount(bind)

	onDestroy(unbind)
</script>

<div bind:this={ref} hidden use:forwardEvents {...$$restProps}>
	<slot />
</div>
