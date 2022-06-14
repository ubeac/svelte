<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@app/directives'
	import { classnameNew, condition } from '@app/utils'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classnameNew('card-header', null, $$props.class)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
