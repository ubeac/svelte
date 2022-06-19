<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * If you want to set Card footer's color same as card's body, use the transparent property
	 */
	export let transparent: boolean = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('card-footer', { transparent }, $$props.class)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
