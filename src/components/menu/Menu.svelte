<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import type { Placement } from '@popperjs/core'

	import { Popup } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

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
	export let placement: Placement = 'bottom-start'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('menu', undefined, $$props.class)
</script>

{#if condition($$props)}
	<Popup {forwardEvents} trigger={['click']} {offset} {placement} {...$$restProps} class={classes}>
		<slot />
	</Popup>
{/if}
