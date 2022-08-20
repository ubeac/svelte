<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Popup } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	import type { MenuPlacements } from './menu.types'

	/**
	 * TODO
	 */
	export let offset: [number, number] = [0, 2]

	/**
	 * TODO
	 */
	export let persistence: boolean = false

	/**
	 * TODO
	 */
	export let placement: MenuPlacements = 'bottom-start'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('menu', undefined, $$props.class)
</script>

{#if condition($$props)}
	<Popup {forwardEvents} trigger={['click']} {offset} {persistence} {placement} {...$$restProps} class={classes}>
		<slot />
	</Popup>
{/if}
