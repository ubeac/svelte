<script lang="ts">
	import { get_current_component, getContext, onDestroy } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Forward All native Events.
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * TODO
	 */
	export let value: any

	const { active, register, unregister } = getContext('TABS')

	let before: any

	$: classes = classname('tabs-panel', { active: $active === value }, $$props.class, true)

	$: (() => {
		unregister(before)
		register(value)
		before = value
	})()

	onDestroy(() => unregister(value))
</script>

<div use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</div>
