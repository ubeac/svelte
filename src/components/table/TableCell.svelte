<script>
	import { forwardEventsBuilder } from '$lib/directives'
	import { condition } from '$lib/utils'
	import { getContext, get_current_component } from 'svelte/internal'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	const head = getContext('head') ?? false
</script>

{#if condition($$props)}
	{#if head}
		<th use:forwardEvents {...$$restProps}>
			<slot />
		</th>
	{:else}
		<td use:forwardEvents {...$$restProps}>
			<slot />
		</td>
	{/if}
{/if}
