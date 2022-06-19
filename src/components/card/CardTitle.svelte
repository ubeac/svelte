<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('card-title', null, $$props.class)
</script>

{#if condition($$props)}
	<h3 use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</h3>
{/if}
