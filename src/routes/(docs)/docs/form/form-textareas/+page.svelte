<script>
	import { Doc, Preview } from '$lib/docs-components'
	import FormTextareaLayout from './FormTextareaLayout.svelte'
	import FormTextareaDefault from './FormTextareaDefault.svelte'
	import FormTextareaHint from './FormTextareaHint.svelte'
	import FormTextareaState from './FormTextareaState.svelte'
</script>

<h1>FormTextarea</h1>

<Doc title="Label">
	Set <code>label</code> property to show textarea label's and bind to its id automatically.
	<code>required</code> is a boolean property which show an indicator on label as well. You can also use
	<code>label</code> slot.
</Doc>
<Preview src="./FormTextareaDefault.svelte">
	<FormTextareaDefault />
</Preview>

<Doc title="Hint">
	Set <code>hint</code> string property to show some useful information about the input. You can also use
	<code>hint</code> slot.
</Doc>
<Preview src="./FormTextareaHint.svelte">
	<FormTextareaHint />
</Preview>

<Doc title="State">
	Set <code>state</code> property to show a state indicator on the input.
</Doc>
<Preview src="./FormTextareaState.svelte">
	<FormTextareaState />
</Preview>

<Doc title="Layout">
	Use default <code>row</code> and <code>col</code> properties to change layout of the FormInputs inside forms.
</Doc>
<Preview src="./FormTextareaLayout.svelte">
	<FormTextareaLayout />
</Preview>
