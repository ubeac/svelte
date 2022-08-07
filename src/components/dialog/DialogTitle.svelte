<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('dialog-title')
</script>

{#if condition($$props)}
	<h5 use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</h5>
{/if}
