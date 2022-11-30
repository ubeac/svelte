<script>
	import { Preview } from '$lib/components'
	import StampColor from './StampColor.svelte'
	import StampSize from './StampSize.svelte'
	import StampPositions from './StampPositions.svelte'
</script>

<h1>Stamps</h1>

<h2>Colors</h2>
<p />
<Preview src="./StampColor.svelte">
	<StampColor />
</Preview>

<h2>Sizes</h2>
<p />
<Preview src="./StampSize.svelte">
	<StampSize />
</Preview>

<h2>Positions</h2>
<p />
<Preview src="./StampPositions.svelte">
	<StampPositions />
</Preview>
