<script>
	import { classname } from '@ubeac/svelte/utils'

	$: classname('page-header', {}, $$props.class)
</script>

<div class="u-page-header">
	<slot />
</div>

<style lang="scss">
	.u-page-header {
		display: flex;
		flex-direction: row;
		background-color: rgb(138, 172, 137);
		padding: 1rem;
	}
</style>
