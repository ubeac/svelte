<script lang="ts">
	import { classname } from '@ubeac/svelte/utils'

	/**
	 * Specify a custom tag used on the root element.
	 */
	export let tag: string = 'footer'

	/**
	 * Set application header's default theme
	 */
	export let theme: 'dark' | 'light' = 'light'

	$: classes = classname('app-footer', { theme }, $$props.class, true)
</script>

<svelte:element this={tag} {...$$restProps} class={classes}>
	<slot />
</svelte:element>
