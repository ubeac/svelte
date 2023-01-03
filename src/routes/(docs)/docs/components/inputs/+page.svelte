<script>
	import { Doc, Preview } from '$lib/docs-components'

	import InputDefault from './InputDefault.svelte'
	import InputDisabled from './InputDisabled.svelte'
	import InputPlaceholder from './InputPlaceholder.svelte'
	import InputReadOnly from './InputReadOnly.svelte'
	import InputSizes from './InputSizes.svelte'
	import InputTypes from './InputTypes.svelte'
	import InputStates from './InputStates.svelte'
	import InputBorderShapes from './InputBorderShapes.svelte'
	import InputMasks from './InputMasks.svelte'
</script>

<h1>Input</h1>

<Doc title="Default">
	Input components are used for collecting user provided information. They can be used for text, numbers, passwords,
	emails, and more.
</Doc>
<Preview src="./InputDefault.svelte">
	<InputDefault />
</Preview>

<Doc title="Placeholder">
	You can add a placeholder to an input by setting the placeholder property. The placeholder text will be displayed
	until the user enters a value.
</Doc>
<Preview src="./InputPlaceholder.svelte">
	<InputPlaceholder />
</Preview>

<Doc title="Types">
	Inputs can have different types. The default type is <code>text</code>. You can change the type by setting the type
	property to <code>email</code>, <code>number</code>, <code>password</code>, <code>search</code>, <code>tel</code>, or
	<code>url</code>.
</Doc>
<Preview src="./InputTypes.svelte">
	<InputTypes />
</Preview>

<Doc title="Sizing">
	You can change the size of an input by setting the size property to <code>sm</code>, <code>md</code>, or
	<code>lg</code>.
</Doc>
<Preview src="./InputSizes.svelte">
	<InputSizes />
</Preview>

<Doc title="Disabled">
	Set the disabled boolean property on an input to give it a grayed out appearance, remove pointer events, and prevent
	focusing.
</Doc>
<Preview src="./InputDisabled.svelte">
	<InputDisabled />
</Preview>

<Doc title="Readonly">
	Set the readonly boolean property on an input to prevent modification of the input’s value. readonly inputs can still
	be focused and selected, while disabled inputs cannot.
</Doc>
<Preview src="./InputReadOnly.svelte">
	<InputReadOnly />
</Preview>

<Doc title="States">
	You can set the <code>valid</code> or <code>invalid</code> boolean properties to apply the valid or invalid state to an
	input.
</Doc>
<Preview src="./InputStates.svelte">
	<InputStates />
</Preview>

<Doc title="Borders">
	Set <code>borderRounded</code> or <code>borderFlush</code> boolean properties to apply rounded borders or remove the borders.
</Doc>
<Preview src="./InputBorderShapes.svelte">
	<InputBorderShapes />
</Preview>

<Doc title="Masks">
	You can use the <code>mask</code> property to apply a mask to an input. You can also use the <code>maskOptions</code>
	property to configure the mask. For more information about the mask options, see the
	<a href="https://github.com/RobinHerbots/Inputmask#readme" target="_blank" rel="noreferrer">Inputmask</a> documentation.
</Doc>
<Preview src="./InputMasks.svelte">
	<InputMasks />
</Preview>
