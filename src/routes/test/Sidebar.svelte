<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte'

	import { classname } from '@ubeac/svelte/utils'
	import { nanoid } from 'nanoid'

	export let id = 'sidebar-' + nanoid(5)
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
	const { headerMode, footerMode, headerSize, footerSize, addElement, removeElement, updateElement } =
		getContext<any>('APP')

	onMount(() => {
		// register side bar
		addElement(id, ref, 'sidebar', { right, mode, open })
	})

	onDestroy(() => {
		// remove sidebar
		removeElement(id)
	})

	$: classes = classname('sidebar', { open, mode, right }, $$props.class, true)

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

	$: updateElement(id, { mode, right })
	$: styles = `
    top: ${calculateTop({ mode, right, $footerMode, $footerSize, $headerMode, $headerSize })}px; 
    bottom: ${calculateBottom({ mode, right, $footerMode, $footerSize, $headerMode, $headerSize })}px;`
</script>

<nav bind:this={ref} style={styles} class={classes}>
	<slot />
</nav>

<style lang="scss">
	
</style>
