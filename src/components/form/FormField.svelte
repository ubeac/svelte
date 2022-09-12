<script lang="ts">
	import { classname } from '$lib/utils'

	/**
	 * Specify a custom tag used on the root element.
	 */
	export let tag: string = 'div'

	$: classes = classname('form-field', {}, $$props.class, true)
</script>

<svelte:element this={tag} {...$$restProps} class={classes}>
	<slot />
</svelte:element>
