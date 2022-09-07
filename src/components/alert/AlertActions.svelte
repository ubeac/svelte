<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('alert-actions', undefined, $$props.class)
</script>

<h4 use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</h4>
