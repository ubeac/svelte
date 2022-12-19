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
	import InputMasks from './InputMasks.svelte'
</script>

<h1>Input</h1>
<Doc title="Default">Input components are used for collecting user provided information.</Doc>
<Preview src="./InputDefault.svelte">
	<InputDefault />
</Preview>

<Doc title="Placeholder">Inputs can have placeholders.</Doc>
<Preview src="./InputPlaceholder.svelte">
	<InputPlaceholder />
</Preview>

<Doc title="Types">You can also change type of input.</Doc>
<Preview src="./InputTypes.svelte">
	<InputTypes />
</Preview>

<Doc title="Sizing">Use size property to change height size of the input.</Doc>
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
	<!--  -->
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
	Using input mask is the way you can force users to fill input field in a specific format with specific values. Since
	the <a href="https://github.com/RobinHerbots/Inputmask#readme" target="_blank">RobinHerbots Inputmask</a> is used, You
	can find more details in the official documentation page.
</Doc>
<Preview src="./InputMasks.svelte">
	<InputMasks />
</Preview>
