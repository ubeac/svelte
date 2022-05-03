<script lang="ts">
	import { getContext, onDestroy, setContext } from 'svelte'

	import { classname } from '@app/utils'

	/**
	 * TODO
	 */
	let klass: string | undefined = undefined
	export { klass as class }

	/**
	 * TODO
	 */
	export let classes: Object | undefined = undefined

	/**
	 * TODO
	 */
	export let componentName: string | undefined = undefined

	/**
	 * TODO
	 */
	export let nodes: Array<any> = []

	/**
	 * TODO
	 */
	export let tag: string | undefined = undefined

	const context: any = getContext('nodes')

	const key = Symbol()

	const map = new Map<Symbol, any>()

	$: classnames = classname(componentName, classes, klass)

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

{#if tag}
	<!-- prettier-ignore -->
	<svelte:element class={classnames} this={tag} {...$$restProps}>
		<slot />
	</svelte:element>
{:else}
	<slot />
{/if}
