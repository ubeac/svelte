<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('popover-header', undefined, $$props.class)
</script>

<h3 use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</h3>
