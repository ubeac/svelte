<script>
	import { get_current_component, setContext } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	setContext('TABLE:HEAD', true)

	$: classes = classname('table-head', undefined, $$props.class)
</script>

<thead use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</thead>
