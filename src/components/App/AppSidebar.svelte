<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import { classname, forwardEventsBuilder } from '$lib/components'

	export let id = 'sidebar'
	/**
	 * Set mode to one of 'temporary' or 'permanent'
	 */
	export let mode: 'temporary' | 'permanent' = 'permanent'

	/**
	 * Controls open/close state on temporary mode
	 */
	export let open: boolean = false

	/**
	 * Should be opened on right side
	 */
	export let right: boolean = false

	let ref: HTMLElement

	const forwardEvents = forwardEventsBuilder(get_current_component())
	const { headerMode, footerMode, headerSize, footerSize, addElement, removeElement, updateElement } =
		getContext<any>('APP')

	onMount(() => {
		addElement(id, ref, 'sidebar', { right, mode, open })
	})

	onDestroy(() => {
		removeElement(id)
	})

	function calculateTop(deps?: any) {
		if (mode === 'temporary') return 0
		if (right) {
			return ['start', 'center'].includes($headerMode) ? 0 : $headerSize
		}
		return ['end', 'center'].includes($headerMode) ? 0 : $headerSize
	}
	function calculateBottom(deps?: any) {
		if (mode === 'temporary') return 0
		if (right) {
			return ['start', 'center'].includes($footerMode) ? 0 : $footerSize
		}
		return ['end', 'center'].includes($footerMode) ? 0 : $footerSize
	}

	$: classes = classname('app-sidebar', { open, mode, right }, $$props.class, true)
	$: updateElement(id, { mode, right, open })
	$: styles = `
    top: ${calculateTop({ mode, right, $footerMode, $footerSize, $headerMode, $headerSize })}px; 
    bottom: ${calculateBottom({ mode, right, $footerMode, $footerSize, $headerMode, $headerSize })}px;`
</script>

<nav bind:this={ref} use:forwardEvents {...$$restProps} style={styles} class={classes}>
	<slot />
</nav>
