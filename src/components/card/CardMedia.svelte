<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	import type { CardMediaPlacements } from './card.types'

	/**
	 * You can change border radius of Media using placement property
	 */
	export let placement: CardMediaPlacements = 'middle'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('card-media', { placement }, $$props.class)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
