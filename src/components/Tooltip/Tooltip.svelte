<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { El, Popup } from '$lib/components/index.js'
	import { forwardEventsBuilder } from '$lib/directives'

	import PopupArrow from '../Popup/PopupArrow.svelte'
	import type { TooltipProps } from './Tooltip.types'

	export let cssPrefix: $$Props['cssPrefix'] = 'tooltip'
	export let tag: $$Props['tag'] = 'div'

	type $$Props = TooltipProps

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: cssProps = {
		//
	}
</script>

<Popup {forwardEvents} {...$$restProps} {cssPrefix} {cssProps} {tag}>
	<PopupArrow cssPrefix="tooltip-arrow" />
	<El tag="div" cssPrefix="tooltip-inner">
		<slot />
	</El>
</Popup>
