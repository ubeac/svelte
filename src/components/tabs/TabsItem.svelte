<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * TODO
	 */
	export let disabled: boolean = false

	/**
	 * Forward All native Events.
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * TODO
	 */
	export let value: any

	$: classes = classname('tabs-item', undefined, $$props.class, true)
</script>

<div use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</div>
