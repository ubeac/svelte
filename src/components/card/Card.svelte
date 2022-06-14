<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@app/directives'
	import { classnameNew, condition } from '@app/utils'

	/**
	 * If you want the card to have shadow, use the elevation property
	 */
	export let elevation: number | undefined = undefined

	/**
	 * If you want the card to have border, use the outline property
	 */
	export let outline: boolean = false

	/**
	 * If you want to change the padding between card's content and card's border, use padding property.
	 */
	export let padding: 'sm' | 'md' | 'lg' | undefined = undefined

	/**
	 * Use tile property to neutralize border-radius
	 */
	export let tile: boolean = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classnameNew(
		'card',
		{
			elevation,
			outline,
			padding,
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
