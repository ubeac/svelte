<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte'

	import { nanoid } from 'nanoid'

	export let id = 'app-footer-' + nanoid(5)

	let ref: HTMLElement

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
</script>

<footer bind:this={ref} style={styles} class="u-app-footer">
	<slot />
</footer>

<style lang="scss">
	.u-app-footer {
		position: absolute;
		display: flex;
		padding: 1rem;
		background-color: rgb(159, 165, 168);
		bottom: 0;
	}
</style>
