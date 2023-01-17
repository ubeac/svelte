<script>
	import { Doc, Preview } from '$lib/docs-components'
	import StampColor from './StampColor.svelte'
	import StampSize from './StampSize.svelte'
	import StampPositions from './StampPositions.svelte'
</script>

<h1>Stamps</h1>
<p>
	Use stamp component to make the card view more attractive and eye catching. Stamp container should have
	<code>relative</code> position.
</p>

<Doc title="Colors">
	<!--  -->
</Doc>
<Preview src="./StampColor.svelte">
	<div class="custom-class"><StampColor /></div>
</Preview>

<Doc title="Sizes">
	<!--  -->
</Doc>
<Preview src="./StampSize.svelte">
	<div class="custom-class"><StampSize /></div>
</Preview>

<Doc title="Positions">
	<!--  -->
</Doc>
<Preview src="./StampPositions.svelte">
	<div class="custom-class"><StampPositions /></div>
</Preview>

<style>
	.custom-class > :global(.u-el-row > .u-el > .u-card) {
		margin: 0.25rem 0;
	}
</style>
