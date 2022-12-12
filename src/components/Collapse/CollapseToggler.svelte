<script lang="ts">
	import { createEventDispatcher, get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Forward all native events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())
	const dispatch = createEventDispatcher()
	/**
	 * Id of target Collapse component
	 */
	export let id: string = nanoid()

	function onClick() {
		dispatch('click', id)
	}

	$: classes = classname('collapse-toggler', undefined, $$props.class)
</script>

<button on:click={onClick} use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</button>
