<script lang="ts">
	import { getContext } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Id of related carousel item
	 */
	export let item: string

	const forwardEvents = forwardEventsBuilder(get_current_component())

	let { activeItem, to } = getContext<any>('CAROUSEL')

	$: active = $activeItem === item

	$: classes = classname('carousel-indicator', { active }, $$props.class)
</script>

{#if condition($$props)}
	<li data-bs-target use:forwardEvents on:click={() => to(item)} {...$$restProps} class={classes} />
{/if}
