<script>
	import { getContext, onDestroy, onMount } from 'svelte'
	import { nanoid } from 'nanoid'
	import { classname, condition } from '$lib/utils'
	import { forwardEventsBuilder } from '$lib/directives'
	import { get_current_component } from 'svelte/internal'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	const context = getContext('CAROUSEL')

	const activeItem = context.activeItem
	const id = nanoid()

	// TODO: remove .carousel-item .active
	$: classes = classname(
		'carousel-item',
		null,
		($$props.class || '') + ' carousel-item' + ($activeItem === id ? ' active' : '')
	)

	onMount(() => {
		context.register(id)
	})
	onDestroy(() => {
		context.unregister(id)
	})
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
