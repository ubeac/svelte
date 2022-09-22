<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte'

	import { nanoid } from 'nanoid'

	export let id = 'app-header-' + nanoid(5)

	let ref: HTMLElement

	const { headerMode, leftSize, rightSize, addElement, removeElement } = getContext<any>('APP')

	onMount(() => {
		addElement(id, ref, 'header')
	})

	onDestroy(() => {
		removeElement(id)
	})

	$: styles = [
		`bottom: 0`,
		`left: ${['end', 'center'].includes($headerMode) ? $leftSize : 0}px`,
		`right: ${['start', 'center'].includes($headerMode) ? $rightSize : 0}px`,
	].join(';')
</script>

<header bind:this={ref} style={styles} class="u-app-header">
	<slot />
</header>

<style lang="scss">
	.u-app-header {
		display: flex;
		padding: 1rem;
		background-color: rgb(160, 168, 159);
	}
</style>
