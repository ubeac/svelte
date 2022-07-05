<script>
	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'
	import { get_current_component } from 'svelte/internal'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('table-row', null, $$props.class)
</script>

{#if condition($$props)}
	<tr use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</tr>
{/if}
