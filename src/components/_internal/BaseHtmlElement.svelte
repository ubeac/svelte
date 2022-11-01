<script lang="ts" context="module">
	let index = 0
</script>

<script lang="ts">
	import { classname } from '$lib/utils'

	/**
	 * Specify an HTML tag name used on the root element.
	 */
	export let tag: string = 'div'

	/**
	 * Define component type name.
	 */
	export let cssPrefix: string = 'el'

	/**
	 * Define component type name.
	 */
	export let cssProps: any = undefined

	index++
	export let id: string | undefined = undefined

	let classes: string | undefined
	$: {
		classes = classname(cssPrefix, cssProps, $$props.class, true)
		id = $$props['id'] ?? cssPrefix + '_' + index.toString()
	}
</script>

<svelte:element this={tag} {...$$restProps} {id} class={classes}>
	<slot />
</svelte:element>
