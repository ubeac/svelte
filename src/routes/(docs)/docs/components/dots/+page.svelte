<script>
	import { Doc, Preview } from '$lib/docs-components'
	import DotColors from './DotColors.svelte'
	import DotAnimations from './DotAnimations.svelte'
	import DotIndicators from './DotIndicators.svelte'
</script>

<h1>Dots</h1>
<p>Dots are particularly useful if you want to make an interface element more noticeable.</p>

<Doc title="Dot colors" />
<Preview src="./DotColors.svelte">
	<div class="custom-class">
		<DotColors />
	</div>
</Preview>

<Doc title="Animated dots" />
<Preview src="./DotAnimations.svelte">
	<div class="custom-class">
		<DotAnimations />
	</div>
</Preview>

<Doc title="Animated dots radius" />
<Preview src="./DotIndicators.svelte">
	<div class="custom-class">
		<DotIndicators />
	</div>
</Preview>

<style>
	.custom-class > :global(.u-dot) {
		margin-right: 0.5rem;
	}
</style>
