<script>
	import { Doc, Preview } from '$lib/docs-components'
	import RibbonColor from './RibbonColor.svelte'
	import RibbonPositions from './RibbonPositions.svelte'
</script>

<h1>Ribbons</h1>
<p>Ribbon container should have <code>relative</code> position.</p>

<Doc title="Colors">
	<!--  -->
</Doc>
<Preview src="./RibbonColor.svelte">
	<div class="custom-class"><RibbonColor /></div>
</Preview>

<Doc title="Positions">
	<!--  -->
</Doc>
<Preview src="./RibbonPositions.svelte">
	<div class="custom-class"><RibbonPositions /></div>
</Preview>

<style>
	.custom-class > :global(.u-el-row > .u-el > .u-card) {
		margin: 0.25rem 0;
	}
</style>
