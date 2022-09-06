<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Popup } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	import type { MenuPlacements } from './menu.types'

	/**
	 * Offset between Menu and target element
	 */
	export let offset: [number, number] = [0, 2]

	/**
	 * Do not close Menu when clicked inside menu
	 */
	export let persistence: boolean = false

	/**
	 * Set Menu position relative to target element
	 */
	export let placement: MenuPlacements = 'bottom-start'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('menu', undefined, $$props.class)
</script>

<Popup {forwardEvents} trigger={['click']} {offset} {persistence} {placement} {...$$restProps} class={classes}>
	<slot />
</Popup>
