<script>
	import { Doc, Preview } from '@ubeac/svelte'

	import InputDefault from './InputDefault.svelte'
	import InputDisabled from './InputDisabled.svelte'
	import InputPlaceholder from './InputPlaceholder.svelte'
	import InputReadOnly from './InputReadOnly.svelte'
	import InputSizes from './InputSizes.svelte'
	import InputTypes from './InputTypes.svelte'
	import InputStates from './InputStates.svelte'
	import InputBorderShapes from './InputBorderShapes.svelte'
	import InputWithText from './InputWithText.svelte'
	import InputWithTextButton from './InputWithTextButton.svelte'
	import InputIcons from './InputIcons.svelte'
</script>

<h1>Input</h1>
<p>Input components are used for collecting user provided information.</p>
<Doc title="Default Markup">
	<!--  -->
</Doc>
<Preview src="./InputDefault.svelte">
	<InputDefault />
</Preview>

<h2>Placeholder</h2>
<p>Inputs can have placeholders</p>
<Preview src="./InputPlaceholder.svelte">
	<InputPlaceholder />
</Preview>

<Doc title="Input types">You can also change type of input.</Doc>
<Preview vertical src="./InputTypes.svelte">
	<InputTypes />
</Preview>

<Doc title="Input sizes">Use size prop to change size of input.</Doc>
<Preview vertical src="./InputSizes.svelte">
	<InputSizes />
</Preview>

<Doc title="Placeholder">Inputs can have placeholders.</Doc>
<Preview src="./InputPlaceholder.svelte">
	<InputPlaceholder />
</Preview>

<Doc title="Wrapping with icon">
	<!--  -->
</Doc>
<Preview vertical src="./InputIcons.svelte">
	<InputIcons />
</Preview>

<Doc title="Wrapping with text">
	<!--  -->
</Doc>
<Preview vertical src="./InputWithText.svelte">
	<InputWithText />
</Preview>

<Doc title="Wrapping with button & text">
	<!--  -->
</Doc>
<Preview vertical src="./InputWithTextButton.svelte">
	<InputWithTextButton />
</Preview>

<Doc title="Disabled input">Set input disabled.</Doc>
<Preview src="./InputDisabled.svelte">
	<InputDisabled />
</Preview>

<Doc title="Readonly input">Set input value unchangable.</Doc>
<Preview src="./InputReadOnly.svelte">
	<InputReadOnly />
</Preview>

<Doc title="Input states">
	<!--  -->
</Doc>
<Preview src="./InputStates.svelte">
	<InputStates />
</Preview>

<Doc title="Input borders">
	<!--  -->
</Doc>
<Preview src="./InputBorderShapes.svelte">
	<InputBorderShapes />
</Preview>
