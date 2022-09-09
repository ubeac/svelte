<script>
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'
	import { get_current_component } from 'svelte/internal'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('carousel-indicators', undefined, $$props.class)
</script>

<ol use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</ol>
