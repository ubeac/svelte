<script>
	import { Preview } from '@ubeac/svelte'
	import DotColors from './DotColors.svelte'
	import DotAnimations from './DotAnimations.svelte'
	import DotIndicators from './DotIndicators.svelte'
</script>

<h1>Dots</h1>
<p>Dots are particularly useful if you want to make an interface element more noticeable.</p>

<h2>Dot colors</h2>
<Preview src="./DotColors.svelte">
	<DotColors />
</Preview>

<h2>Animated dots</h2>
<Preview src="./DotAnimations.svelte">
	<DotAnimations />
</Preview>

<h2>Animated dots radius</h2>
<Preview src="./DotIndicators.svelte">
	<DotIndicators />
</Preview>
