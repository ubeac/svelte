<script lang="ts">
	import { classname } from '$lib/utils'

	/**
	 * Show close button icon
	 */
	export let showCloseButton: boolean = true

	$: classes = classname('toast-header', undefined, $$props.class, true)

	function remove(e: any) {
		const container = e?.path[2]
		container?.parentNode?.removeChild(container)
	}
</script>

<div class={classes} {...$$restProps}>
	<slot />
	{#if showCloseButton}
		<button on:click={remove} type="button" class="ms-2 btn-close" data-bs-dismiss="toast" aria-label="Close" />
	{/if}
</div>
