<script lang="ts">
	import { getContext } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	import type { CarouselContext } from './carousel.types'

	/**
	 * Id of related carousel item
	 */
	export let item: string

	const forwardEvents = forwardEventsBuilder(get_current_component())

	let { activeItem, to } = getContext<CarouselContext>('CAROUSEL')

	$: active = $activeItem === item

	$: classes = classname('carousel-indicator', { active }, $$props.class)
</script>

<li data-bs-target use:forwardEvents on:click={() => to(item)} {...$$restProps} class={classes} />
