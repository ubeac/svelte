<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@app/directives'
	import { classname, condition } from '@app/utils'

	/**
	 * You can change border radius of Media using placement property
	 */
	export let placement: 'top' | 'start' | 'middle' | 'end' | 'bottom' = 'middle'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('card-media', { placement }, $$props.class)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
