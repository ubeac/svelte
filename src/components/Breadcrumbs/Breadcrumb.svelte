<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Change separator Icon between items
	 */
	export let separator: 'arrows' | 'bullets' | 'dots' | 'defalut' = 'defalut'

	const forwardEevnts = forwardEventsBuilder(get_current_component())

	$: classes = classname('breadcrumb', { separator }, $$props.class)
</script>

<ol use:forwardEevnts {...$$restProps} class={classes}>
	<slot />
</ol>
