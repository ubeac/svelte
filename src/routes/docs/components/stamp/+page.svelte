<script>
	import { Doc, Preview } from '$lib/components/index.js'
	import StampColor from './StampColor.svelte'
	import StampSize from './StampSize.svelte'
	import StampPositions from './StampPositions.svelte'
</script>

<h1>Stamps</h1>
<p>Stamp container should have <code>relative</code> position.</p>

<Doc title="Colors">
	<!--  -->
</Doc>
<Preview src="./StampColor.svelte">
	<StampColor />
</Preview>

<Doc title="Sizes">
	<!--  -->
</Doc>
<Preview src="./StampSize.svelte">
	<StampSize />
</Preview>

<Doc title="Positions">
	<!--  -->
</Doc>
<Preview src="./StampPositions.svelte">
	<StampPositions />
</Preview>
