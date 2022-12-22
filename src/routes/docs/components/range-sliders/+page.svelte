<script>
	import { Doc, Preview } from '$lib/components'
	import RangeSliderDefault from './RangeSliderDefault.svelte'
	// import DividerPositions from './DividerPositions.svelte'
	// import DividerColors from './DividerColors.svelte'
</script>

<h1>Range Slider</h1>
<p />

<Doc title="Defaults" />
<Preview src="./RangeSliderDefault.svelte">
	<RangeSliderDefault />
</Preview>
<!-- 
<Doc title="Text Positions">
	You can modify the position of the text which is to be included in a separator and make it left- or right-aligned.
	Otherwise, the text will remain centered.
</Doc>
<Preview src="./DividerPositions.svelte">
	<DividerPositions />
</Preview>

<Doc title="Colors">
	Customize the color of the divider to suit your design.
</Doc>
<Preview src="./DividerColors.svelte">
	<DividerColors />
</Preview> -->
