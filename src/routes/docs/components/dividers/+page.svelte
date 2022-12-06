<script>
	import { Preview } from '@ubeac/svelte'
	import DividerDefault from './DividerDefault.svelte'
	import DividerPositions from './DividerPositions.svelte'
	import DividerColors from './DividerColors.svelte'
</script>

<h1>Divider</h1>
<p>
	Dividers help organize content and make the interface layout clear and uncluttered. Greater clarity adds up to better
	user experience and enhanced interaction with a website or app.
</p>

<h2>Defaults</h2>
<p>
	Use dividers to visually separate content into parts. You can use a line only or add text that will be centered by
	default.
</p>
<Preview src="./DividerDefault.svelte">
	<DividerDefault />
</Preview>

<h2>Text Positions</h2>
<p>
	You can modify the position of the text which is to be included in a separator and make it left- or right-aligned.
	Otherwise, the text will remain centered.
</p>
<Preview src="./DividerPositions.svelte">
	<DividerPositions />
</Preview>

<h2>Colors</h2>
<p>Customize the color of the divider to suit your design.</p>
<Preview src="./DividerColors.svelte">
	<DividerColors />
</Preview>
