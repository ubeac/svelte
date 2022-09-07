<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Forward all native events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Id of target Collapse component
	 */
	export let id: string = nanoid()

	$: classes = classname('collapse-toggler', undefined, $$props.class)
</script>

<button
	aria-controls="#collapse-{id}"
	data-bs-target="#collapse-{id}"
	data-bs-toggle="collapse"
	id="collapse-{id}-toggler"
	type="button"
	use:forwardEvents
	{...$$restProps}
	class={classes}>
	<slot />
</button>
