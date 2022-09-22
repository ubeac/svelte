<script>
	import { classname } from '@ubeac/svelte/utils'

	export let hasLeftSidebar = false

	$: classname('page-footer', { hasLeftSidebar }, $$props.class)
</script>

<div class="u-page-footer">
	<slot />
</div>

<style lang="scss">
	.u-page-footer {
		display: flex;
		flex-direction: row;
		background-color: rgb(141, 135, 122);
		padding: 1rem;
	}
</style>
