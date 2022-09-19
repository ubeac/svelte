<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '@ubeac/svelte/directives'
	import { classname } from '@ubeac/svelte/utils'
	import { nanoid } from 'nanoid'

	/**
	 * Sets id of the footer element
	 */
	export let id = 'app-footer-' + nanoid(5)

	let ref: HTMLElement

	const forwardEvents = forwardEventsBuilder(get_current_component())
	const { footerMode, leftSize, rightSize, addElement, removeElement } = getContext<any>('APP')

	onMount(() => {
		addElement(id, ref, 'footer')
	})

	onDestroy(() => {
		removeElement(id)
	})

	$: styles = [
		`bottom: 0`,
		`left: ${['end', 'center'].includes($footerMode) ? $leftSize : 0}px`,
		`right: ${['start', 'center'].includes($footerMode) ? $rightSize : 0}px`,
	].join(';')

	$: classes = classname('app-footer', {}, $$props.class, true)
</script>

<footer use:forwardEvents bind:this={ref} {...$$restProps} style={styles} class={classes}>
	<slot />
</footer>
