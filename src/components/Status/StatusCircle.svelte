<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'

	import { El } from '../Base'
	import type { StatusProps } from './Status.types'

	type $$Props = StatusProps

	export let tag: $$Props['tag'] = 'span'
	export let cssPrefix: $$Props['cssPrefix'] = 'status-circle'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: otherProps = {
		tag,
		cssPrefix,
	}
</script>

<El {...$$restProps} {forwardEvents} {...otherProps}>
	<slot />
</El>
