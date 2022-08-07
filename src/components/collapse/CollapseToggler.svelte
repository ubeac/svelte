<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Id of target Collapse component
	 */
	export let id: string = nanoid()

	/**
	 * Collapsed
	 */
	// export let collapsed = false

	/**
	 * Forward all native events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('collapse-toggler', {}, $$props.class)
</script>

<button
	id="collapse-{id}-toggler"
	type="button"
	data-bs-target="#collapse-{id}"
	data-bs-toggle="collapse"
	aria-controls="#collapse-{id}"
	use:forwardEvents
	{...$$restProps}
	class={classes}>
	<slot />
</button>
