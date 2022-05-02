<script context="module" lang="ts">
	let index = 0
</script>

<script lang="ts">
	index += 1

	export let tag: string | undefined = undefined
	export let visible: any = undefined
	export let name: string | undefined = undefined
	export let id: string = tag ?? 'div' + index.toString()

	export function getElement() {
		return element
	}

	let element: HTMLElement
</script>

{#if !Object.keys($$props).includes('visible') || visible === true || visible === 'true' || ((typeof visible === 'number' || typeof visible === 'bigint') && visible !== 0) || (typeof visible === 'object' && visible !== null) || (typeof visible === 'string' && visible !== 'false' && visible !== '')}
	<svelte:element this={tag} {...$$restProps} bind:this={element} {id} {name} on:click>
		<slot />
	</svelte:element>
{/if}
