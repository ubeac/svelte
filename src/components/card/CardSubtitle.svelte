<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@app/directives'
	import { classname, condition } from '@app/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('card-subtitle', null, $$props.class)
</script>

{#if condition($$props)}
	<p use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</p>
{/if}
