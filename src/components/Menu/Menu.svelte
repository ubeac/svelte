<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Popup } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'

	import type { MenuProps } from './Menu.types'

	type $$Props = MenuProps

	export let cssPrefix: $$Props['cssPrefix'] = 'menu'
	export let tag: $$Props['tag'] = 'div'

	export let trigger: $$Props['trigger'] = ['click']

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: cssProps = {
		//
	}
</script>

<Popup {...$$restProps} {forwardEvents} {trigger} {tag} {cssPrefix} {cssProps}>
	<slot />
</Popup>
