<script lang="ts">
	import { get_current_component, getContext } from 'svelte/internal'

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

	const { active } = getContext('TABS')

	$: selected = $active === value

	$: classes = classname('tabs-panel', { active: selected }, $$props.class, true)
</script>

<div use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</div>
