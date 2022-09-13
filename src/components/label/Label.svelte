<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Show a required indicator *
	 */
	export let required: boolean = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('label', { required }, $$props.class)
</script>

<label use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</label>
