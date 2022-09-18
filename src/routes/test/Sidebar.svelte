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
	.u-sidebar {
		position: absolute;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		background-color: rgb(80, 80, 100);
		color: white;
		transition: all 0.4s ease;
		z-index: 1;
	}

	.u-sidebar.u-sidebar-mode-temporary.u-sidebar-open {
		opacity: 1;
	}
	.u-sidebar.u-sidebar-mode-temporary:not(.u-sidebar-open) {
		opacity: 0;
		transform: translateX(-100%);
	}
	.u-sidebar.u-sidebar-right.u-sidebar-mode-temporary:not(.u-sidebar-open) {
		opacity: 0;
		transform: translateX(100%);
	}

	.u-sidebar.u-sidebar-right {
		right: 0;
	}
</style>
