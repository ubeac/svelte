<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import TextareaDefault from './TextareaDefault.svelte'
	import TextareaRowCol from './TextareaRowCol.svelte'
	import TextareaDisabled from './TextareaDisabled.svelte'
	import TextareaReadonly from './TextareaReadonly.svelte'
	import TextareaPlaceholder from './TextareaPlaceholder.svelte'
	import TextareaSizes from './TextareaSizes.svelte'
</script>

<h1>Textarea</h1>

<Doc title="Default">Textarea components are used for collecting user provided information (multi-line Input).</Doc>
<Preview src="./TextareaDefault.svelte">
	<TextareaDefault />
</Preview>

<Doc title="Rows">You can set number of rows for Textarea using <code>rows</code> props.</Doc>
<Preview src="./TextareaRowCol.svelte">
	<TextareaRowCol />
</Preview>

<Doc title="Sizing">You can set size of Textarea using <code>size</code> props.</Doc>
<Preview src="./TextareaSizes.svelte">
	<TextareaSizes />
</Preview>

<Doc title="Disabled">Textarea supports <code>disabled</code> mode.</Doc>
<Preview src="./TextareaDisabled.svelte">
	<TextareaDisabled />
</Preview>

<Doc title="Read-Only">Textarea supports <code>disabled</code> and <code>readonly</code> modes.</Doc>
<Preview src="./TextareaReadonly.svelte">
	<TextareaReadonly />
</Preview>

<Doc title="Placeholder">You can set placeholder of textarea using <code>placeholder</code> property.</Doc>
<Preview src="./TextareaPlaceholder.svelte">
	<TextareaPlaceholder />
</Preview>
