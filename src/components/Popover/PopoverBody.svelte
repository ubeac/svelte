<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'

	import  {type PopoverBodyProps, El } from '$lib/components'

	type $$Props = PopoverBodyProps

	export let tag: $$Props['tag'] = 'div'
	export let cssPrefix: $$Props['cssPrefix'] = 'popover-body'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: cssProps = {
		//
	}
</script>

<El {...$$restProps} {tag} {forwardEvents} {cssPrefix} {cssProps}>
	<slot />
</El>
