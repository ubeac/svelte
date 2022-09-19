<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@ubeac/svelte/directives'
	import { classname } from '@ubeac/svelte/utils'
	import { nanoid } from 'nanoid'

	/**
	 * Sets id of the header element
	 */
	export let id = 'app-header-' + nanoid(5)

	let ref: HTMLElement

	const forwardEvents = forwardEventsBuilder(get_current_component())
	const { headerMode, leftSize, rightSize, addElement, removeElement } = getContext<any>('APP')

	onMount(() => {
		addElement(id, ref, 'header')
	})

	onDestroy(() => {
		removeElement(id)
	})

	$: styles = [
		`left: ${['end', 'center'].includes($headerMode) ? $leftSize : 0}px`,
		`right: ${['start', 'center'].includes($headerMode) ? $rightSize : 0}px`,
	].join(';')

	$: classes = classname('app-header', {}, $$props.class, true)
</script>

<header use:forwardEvents bind:this={ref} {...$$restProps} style={styles} class={classes}>
	<slot />
</header>
