<script>
	import { forwardEventsBuilder } from '$lib/directives'
	import { condition } from '$lib/utils'
	import { get_current_component, setContext } from 'svelte/internal'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	setContext('head', true)
</script>

{#if condition($$props)}
	<thead use:forwardEvents {...$$restProps}>
		<slot />
	</thead>
{/if}
