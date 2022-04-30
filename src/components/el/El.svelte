<script lang="ts">
	import { getContext, onDestroy, setContext } from 'svelte'

	/**
	 * TODO
	 */
	export let nodes: Array<any> = []

	/**
	 * TODO
	 */
	export let tag: string | undefined = undefined

	/**
	 * TODO
	 */
	export let visible: boolean = false

	const context: any = getContext('nodes')

	const key = Symbol()

	const map = new Map<Symbol, any>()

	$: context && context.update(key, $$props)

	function remove(key: Symbol) {
		map.delete(key)
		nodes = Array.from(map.values())
	}

	function update(key: Symbol, node: any) {
		map.set(key, node)
		nodes = Array.from(map.values())
		context && context.update(key, node)
	}

	setContext('nodes', { remove, update })

	onDestroy(() => context && context.remove(key))
</script>

{#if visible || !Object.keys($$props).includes('visible')}
	{#if tag}
		<!-- prettier-ignore -->
		<svelte:element this={tag} {...$$restProps}>
			<slot />
		</svelte:element>
	{:else}
		<slot />
	{/if}
{/if}
