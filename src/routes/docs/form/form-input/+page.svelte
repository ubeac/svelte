<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import FormInputLayout from './FormInputLayout.svelte'
	import FormInputDefault from './FormInputDefault.svelte'
	import FormInputHint from './FormInputHint.svelte'
	import FormInputState from './FormInputState.svelte'
	import FormInputMask from './FormInputMask.svelte'
</script>

<h1>FormInput</h1>
<p>
	FormInput is an input and label wrapper component to be used insisde forms. It supports all props and events of
	<a href="/docs/components/inputs">Input</a>
	and also have some additional features.
</p>

<Doc title="Label">
	Set <code>label</code> property to show input label's and bind to its id automatically.
	<code>required</code> is a booleanproperty which show an indicator on label as well. You can also use
	<code>label</code> slot.
</Doc>
<Preview src="./FormInputDefault.svelte">
	<FormInputDefault />
</Preview>

<Doc title="Hint">
	Set <code>hint</code> string property to show some useful information about the input. You can also use
	<code>hint</code> slot.
</Doc>
<Preview src="./FormInputHint.svelte">
	<FormInputHint />
</Preview>

<Doc title="State">
	Set <code>state</code> property to show a state indicator on the input.
</Doc>
<Preview src="./FormInputState.svelte">
	<FormInputState />
</Preview>

<Doc title="Mask">
	You can use the <code>mask</code> property to apply a mask to an input. You can also use the <code>maskOptions</code>
	property to configure the mask. For more information about the mask options, see the
	<a href="https://github.com/RobinHerbots/Inputmask#readme" target="_blank" rel="noreferrer">Inputmask</a> documentation.
</Doc>
<Preview src="./FormInputMask.svelte">
	<FormInputMask />
</Preview>

<Doc title="Layout">
	Use default <code>row</code> and <code>col</code> properties to change layout of the FormInputs inside forms.
</Doc>
<Preview src="./FormInputLayout.svelte">
	<FormInputLayout />
</Preview>
