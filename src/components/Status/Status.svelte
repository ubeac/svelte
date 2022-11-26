<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'

	import { El } from '../Base'
	import type { StatusProps } from './Status.types'

	type $$Props = StatusProps

	export let tag: $$Props['tag'] = 'span'
	export let cssPrefix: $$Props['cssPrefix'] = 'status'

	export let animated: $$Props['animated'] = undefined
	export let color: $$Props['color'] = undefined
	export let dot: $$Props['dot'] = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: cssProps = {
		animated,
		color,
		dot,
	}

	$: otherProps = {
		tag,
		cssPrefix,
	}
</script>

<El {...$$restProps} {forwardEvents} {cssProps} {...otherProps}>
	<slot />
</El>
