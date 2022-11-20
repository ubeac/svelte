<script>
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('table-foot', undefined, $$props.class)
</script>

<tfoot use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</tfoot>
