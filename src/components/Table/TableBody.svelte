<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('table-body', undefined, $$props.class)
</script>

<tbody use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</tbody>
