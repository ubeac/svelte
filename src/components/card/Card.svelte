<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * If you want the card to have shadow, use the elevation property
	 */
	export let elevation: number | undefined = undefined

	/**
	 * If you want the card to have border, use the outline property
	 */
	export let outline: boolean = false

	/**
	 * Use tile property to neutralize border-radius
	 */
	export let tile: boolean = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'card',
		{
			elevation,
			outline,
			tile,
		},
		$$props.class
	)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
