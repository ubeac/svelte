<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import type { Placement } from '@popperjs/core'

	import { Popup } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let trigger: Array<'click' | 'focus' | 'hover'> = ['click']

	/**
	 * TODO
	 */
	export let offset: [number, number] = [0, 0]

	/**
	 * TODO
	 */
	export let placement: Placement = 'bottom-start'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('menu', undefined, $$props.class)
</script>

{#if condition($$props)}
	<Popup {forwardEvents} {trigger} {offset} {placement} {...$$restProps} class={classes}>
		<slot />
	</Popup>
{/if}
