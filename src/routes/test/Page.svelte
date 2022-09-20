<script lang="ts">
	import { getContext } from 'svelte'

	import { classname } from '@ubeac/svelte/utils'

	export let hasLeftSidebar = false

	const { headerSize, footerSize, leftSize, rightSize } = getContext<any>('APP')

	$: classes = classname('pagea', { hasLeftSidebar }, $$props.class)
	$: console.log(`inset: ${$headerSize}px ${$rightSize}px  ${$footerSize}px ${$leftSize}px;`)
</script>

<div style="inset: {$headerSize}px {$rightSize}px  {$footerSize}px {$leftSize}px;" class={classes}>
	<slot />
</div>

<style lang="scss">
	.u-pagea {
		overflow: auto;
		position: absolute;
		display: flex;
		flex-direction: column;
		flex: 1;
		background-color: rgb(124, 141, 122);
	}
</style>
