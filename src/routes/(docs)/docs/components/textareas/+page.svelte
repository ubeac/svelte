<script>
	import { Doc, Preview } from '$lib/docs-components'
	import TextareaDefault from './TextareaDefault.svelte'
	import TextareaRowCol from './TextareaRowCol.svelte'
	import TextareaDisabled from './TextareaDisabled.svelte'
	import TextareaReadonly from './TextareaReadonly.svelte'
	import TextareaPlaceholder from './TextareaPlaceholder.svelte'
	import TextareaSizes from './TextareaSizes.svelte'
	import TextareaBorderShapes from './TextareaBorderShapes.svelte'
</script>

<h1>Textarea</h1>

<Doc title="Default">Textarea components are used for collecting user provided information (multi-line Input).</Doc>
<Preview src="./TextareaDefault.svelte">
	<div class="custom-class"><TextareaDefault /></div>
</Preview>

<Doc title="Rows">You can set number of rows for Textarea using <code>rows</code> props.</Doc>
<Preview src="./TextareaRowCol.svelte">
	<div class="custom-class"><TextareaRowCol /></div>
</Preview>

<Doc title="Sizing">You can set size of Textarea using <code>size</code> props.</Doc>
<Preview src="./TextareaSizes.svelte">
	<div class="custom-class"><TextareaSizes /></div>
</Preview>

<Doc title="Disabled">Textarea supports <code>disabled</code> mode.</Doc>
<Preview src="./TextareaDisabled.svelte">
	<div class="custom-class"><TextareaDisabled /></div>
</Preview>

<Doc title="Read-Only">Textarea supports <code>disabled</code> and <code>readonly</code> modes.</Doc>
<Preview src="./TextareaReadonly.svelte">
	<div class="custom-class"><TextareaReadonly /></div>
</Preview>

<Doc title="Placeholder">You can set placeholder of textarea using <code>placeholder</code> property.</Doc>
<Preview src="./TextareaPlaceholder.svelte">
	<div class="custom-class"><TextareaPlaceholder /></div>
</Preview>

<Doc title="Borders">
	Set <code>borderRounded</code> or <code>borderFlush</code> boolean properties to apply rounded borders or remove the borders.
</Doc>
<Preview src="./TextareaBorderShapes.svelte">
	<div class="custom-class"><TextareaBorderShapes /></div>
</Preview>

<style>
	.custom-class > :global(.u-textarea-wrapper) {
		margin: 0.25rem 0;
	}
</style>
