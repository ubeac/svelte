<script>
	import { forwardEventsBuilder } from '$lib/directives'
	import { condition } from '$lib/utils'
	import { get_current_component } from 'svelte/internal'

	const forwardEvents = forwardEventsBuilder(get_current_component())
</script>

{#if condition($$props)}
	<tr use:forwardEvents {...$$restProps}>
		<slot />
	</tr>
{/if}
