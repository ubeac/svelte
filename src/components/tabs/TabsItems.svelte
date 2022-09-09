<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Forward All native Events.
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * TODO
	 */
	export let grow: boolean = false

	/**
	 * TODO
	 */
	export let justify: 'start' | 'center' | 'end' = 'start'

	$: classes = classname('tabs-items', undefined, $$props.class, true)
</script>

<div use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</div>
