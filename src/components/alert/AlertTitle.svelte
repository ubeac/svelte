<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@app/directives'
	import { classname, condition } from '@app/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('alert-title', null, $$props.class)
</script>

{#if condition($$props)}
	<h4 use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</h4>
{/if}
