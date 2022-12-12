<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { El, Popup } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'

	import type { PopoverProps } from './Popover.types'
  import PopupArrow from '../Popup/PopupArrow.svelte'

	type $$Props = PopoverProps;
	
	const forwardEvents = forwardEventsBuilder(get_current_component())
</script>

<Popup {forwardEvents} {...$$restProps} cssPrefix="popover" tag="div">
	<PopupArrow cssPrefix="popover-arrow"/>
	<slot />
</Popup>
