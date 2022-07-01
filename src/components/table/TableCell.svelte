<script lang="ts">
	import { get_current_component, getContext } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	const head = getContext('head') ?? false

	$: classes = classname('table-cell', null, $$props.class)
</script>

{#if condition($$props)}
	{#if head}
		<th use:forwardEvents {...$$restProps} class={classes}>
			<slot />
		</th>
	{:else}
		<td use:forwardEvents {...$$restProps}>
			<slot />
		</td>
	{/if}
{/if}
