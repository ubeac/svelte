<script lang="ts">
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	export let headerMode: 'start' | 'center' | 'end' | 'grow' = 'grow'
	export let footerMode: 'start' | 'center' | 'end' | 'grow' = 'grow'

	let elements: any[] = []

	let headerSize = writable(0)
	let leftSize = writable(0)
	let rightSize = writable(0)
	let footerSize = writable(0)

	let headerModeStore = writable(headerMode)
	let footerModeStore = writable(footerMode)

	function calculateHeight(elements: any[]) {
		return elements.reduce((height, current) => {
			return height + current.element.clientHeight
		}, 0)
	}

	function calculateSidebarWidth(elements: any[]) {
		let result = elements.reduce((width, current) => {
			return width + (current.mode === 'temporary' ? 0 : current.element.clientWidth)
		}, 0)
		return result
	}

	function addElement(id: string, element: HTMLElement, type: 'header' | 'sidebar' | 'footer', props: any) {
		elements = [...elements, { id, element, type, ...props }]
	}

	function removeElement(id: string) {
		elements = elements.filter((element) => element.id !== id)
	}

	function updateElement(id: string, props: any) {
		elements = elements.map((element) => {
			if (element.id === id) return { ...element, ...props }
			return element
		})
	}

	$: headerSize.set(calculateHeight(elements.filter((element) => element.type === 'header')))
	$: leftSize.set(calculateSidebarWidth(elements.filter((element) => element.type === 'sidebar' && !element.right)))
	$: rightSize.set(calculateSidebarWidth(elements.filter((element) => element.type === 'sidebar' && element.right)))
	$: footerSize.set(calculateHeight(elements.filter((element) => element.type === 'footer')))
	$: headerModeStore.set(headerMode)
	$: footerModeStore.set(footerMode)

	setContext('APP', {
		headerMode: headerModeStore,
		footerMode: footerModeStore,
		headerSize,
		footerSize,
		leftSize,
		rightSize,
		addElement,
		removeElement,
		updateElement,
	})
</script>

<div class="u-app">
	<slot />
</div>

<style lang="scss">
	.u-app {
		display: flex;
		flex-direction: column;
		background-color: #fefefe;
		height: 100vh;
	}
</style>
