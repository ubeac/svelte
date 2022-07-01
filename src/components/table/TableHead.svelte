<script>
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'
	import { get_current_component, setContext } from 'svelte/internal'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	setContext('head', true)

	$: classes = classname('table-head', null, $$props.class)
</script>

{#if condition($$props)}
	<thead use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</thead>
{/if}
