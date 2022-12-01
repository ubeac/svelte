<script>
	import { Preview } from '$lib/components'
	import RibbonColor from './RibbonColor.svelte'
	import RibbonPositions from './RibbonPositions.svelte'
</script>

<h1>Ribbons</h1>
<p>Ribbon container should have <code>relative</code> position.</p>

<h2>Colors</h2>
<p />
<Preview src="./RibbonColor.svelte">
	<RibbonColor />
</Preview>

<h2>Positions</h2>
<p />
<Preview src="./RibbonPositions.svelte">
	<RibbonPositions />
</Preview>
