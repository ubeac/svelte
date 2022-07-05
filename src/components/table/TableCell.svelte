<script lang="ts">
	import { get_current_component, getContext } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	const head = getContext('TABLE:HEAD') ?? false

	$: classes = classname('table-cell', undefined, $$props.class)
</script>

{#if condition($$props)}
	<svelte:element this={head ? 'th' : 'td'} use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</svelte:element>
{/if}
