<script>
	import { Doc, Preview } from '$lib/docs-components'
	import DropdownButtonDefault from './DropdownButtonDefault.svelte'
	// import DividerPositions from './DividerPositions.svelte'
	// import DividerColors from './DividerColors.svelte'
</script>

<h1>Dropdown Button</h1>
<p />

<Doc title="Defaults">blah blah</Doc>
<Preview src="./DropdownButtonDefault.svelte">
	<DropdownButtonDefault />
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
