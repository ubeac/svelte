<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'

	import { El } from '../Base'
	import type { PopoverBodyProps } from './Popover.types'

	type $$Props = PopoverBodyProps

	export let tag: $$Props['tag'] = 'h3'
	export let cssPrefix: $$Props['cssPrefix'] = 'popover-header'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: cssProps = {
		//
	}
</script>

<El {...$$restProps} {tag} {forwardEvents} {cssPrefix} {cssProps}>
	<slot />
</El>
