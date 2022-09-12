<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Radio color
	 */
	export let color: Colors = 'default'

	/**
	 * Radio checked status
	 */
	export let value: boolean | undefined = undefined

	/**
	 * Radio name
	 */
	export let name: string | undefined = undefined

	const dispatch = createEventDispatcher()

	function change(event: any) {
		value = event.target.checked
		dispatch('changed', value)
	}

	$: classes = classname('radio', { color }, $$props.class, true)
</script>

<input
	type="radio"
	{name}
	{value}
	checked={value}
	use:forwardEvents
	{...$$restProps}
	class={classes}
	on:change={change} />
