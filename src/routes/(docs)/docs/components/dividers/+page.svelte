<script>
	import { Doc, Preview } from '$lib/docs-components'
	import DividerDefault from './DividerDefault.svelte'
	import DividerPositions from './DividerPositions.svelte'
	import DividerColors from './DividerColors.svelte'
	import DividerDirection from './DividerDirection.svelte'
</script>

<h1>Divider</h1>
<p>
	Dividers help organize content and make the interface layout clear and uncluttered. Greater clarity adds up to better
	user experience and enhanced interaction with a website or app.
</p>

<Doc title="Defaults">
	Use dividers to visually separate content into parts. You can use a line only or add text that will be centered by
	default.
</Doc>
<Preview src="./DividerDefault.svelte">
	<DividerDefault />
</Preview>

<Doc title="Text Positions">
	You can modify the position of the text which is to be included in a separator and make it left- or right-aligned.
	Otherwise, the text will remain centered.
</Doc>
<Preview src="./DividerPositions.svelte">
	<DividerPositions />
</Preview>

<Doc title="Colors">Customize the color of the divider to suit your design.</Doc>
<Preview src="./DividerColors.svelte">
	<DividerColors />
</Preview>

<Doc title="Vertical">Direction of divider also can be vertical.</Doc>
<Preview src="./DividerDirection.svelte">
	<DividerDirection />
</Preview>
