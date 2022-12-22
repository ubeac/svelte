<script>
	import { Preview, Doc } from '@ubeac/svelte'
	import FormSelectDefault from './FormSelectDefault.svelte'
	import FormSelectColumn from './FormSelectColumn.svelte'
	import FormSelectState from './FormSelectState.svelte'
	import FormSelectHint from './FormSelectHint.svelte'
</script>

<h1>FormSelect</h1>
<p>Add one of the available selects a dropdown select - to let users choose from a predefined set of options.</p>

<Doc title="Label"
	>Set <code>label</code> property to show input label's and bind to its id automatically. <code>required</code> is a
	booleanproperty which show an indicator on label as well. You can also use <code>label</code> slot.</Doc>
<Preview src="./FormSelectDefault.svelte">
	<FormSelectDefault />
</Preview>

<Doc title="Hint/Validation Message"
	>Set <code>hint</code> string property to show some useful information about the input. You can also use
	<code>hint</code> slot.</Doc>
<Preview class="align-items-stretch" src="./FormSelectHint.svelte">
	<FormSelectHint />
</Preview>

<Doc title="State">Set <code>state</code> property to show a state indicator on the input.</Doc>
<Preview src="./FormSelectState.svelte">
	<FormSelectState />
</Preview>

<Doc title="Layout"
	>Use default <code>row</code> and <code>col</code> properties to change layout of the FormSelects inside forms.</Doc>
<Preview src="./FormSelectColumn.svelte">
	<FormSelectColumn />
</Preview>
