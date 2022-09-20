<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Popup } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	import type { PopupPlacements, PopupTriggers } from '../popup'

	/**
	 * Disable Popup's functionality
	 */
	export let disabled: boolean = false

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

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('popover', undefined, $$props.class)
</script>

<Popup {disabled} {offset} {trigger} {placement} {persistence} {forwardEvents} {...$$restProps} class={classes}>
	<div class={classname('popover-arrow')} data-popper-arrow />
	<slot />
</Popup>
