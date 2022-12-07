<script>
	import { Preview } from '@ubeac/svelte'
	import TextareaDefault from './TextareaDefault.svelte'
	import TextareaValue from './TextareaValue.svelte'
	import TextareaResizable from './TextareaResizable.svelte'
	import TextareaRowCol from './TextareaRowCol.svelte'
	import TextareaDisabledReadonly from './TextareaDisabledReadonly.svelte'
	import TextareaPlaceholder from './TextareaPlaceholder.svelte'
</script>

<h1>Textarea</h1>
<p>textarea is a multi-line Input, useful for larger amounts of text.</p>

<Preview src="./TextareaDefault.svelte">
	<div class="example-textarea">
		<TextareaDefault />
	</div>
</Preview>

<h2>Initial Value</h2>
<p>You can initialize a textarea with initial value.</p>

<Preview src="./TextareaValue.svelte">
	<div class="example-textarea">
		<TextareaValue />
	</div>
</Preview>

<!-- <h2>resizable</h2>
<p>Textarea is not resizable by default, you can make it resizable by passing <code>resizable</code> prop.</p>

<Preview src="./TextareaResizable.svelte">
	<div class="example-textarea">
		<TextareaResizable />
	</div>
</Preview> -->

<h2>row</h2>
<p>You can set size of Textarea using <code>rows</code> props.</p>

<Preview src="./TextareaRowCol.svelte">
	<div class="example-textarea-row-col">
		<TextareaRowCol />
	</div>
</Preview>

<h2>Disabled and Read-Only</h2>
<p>Textarea supports Disabled and Read-Only states</p>

<Preview src="./TextareaDisabledReadonly.svelte">
	<div class="example-textarea-row-col">
		<TextareaDisabledReadonly />
	</div>
</Preview>

<h2>Placeholder</h2>
<p>You can set placeholder of textarea using <code>placeholder</code> prop</p>

<Preview src="./TextareaPlaceholder.svelte">
	<div class="example-textarea-row-col">
		<TextareaPlaceholder />
	</div>
</Preview>

<style>
	.example-textarea {
		display: flex;
		flex-direction: column;
		min-width: 50%;
		gap: 0.5rem;
	}
	.example-textarea-row-col {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	p.preview {
		white-space: pre-line;
	}
</style>
