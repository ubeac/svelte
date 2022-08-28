<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * If you want the card to have border, use the outline property
	 */
	export let outline: boolean = false

	/**
	 * Use tile property to neutralize border-radius
	 * TODO: do we need this prop? Isn't it better to user shape prop (tile|default|rounded)?
	 */
	export let tile: boolean = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname(
		'card',
		{
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
