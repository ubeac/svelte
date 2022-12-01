<script>
	import { Preview } from '$lib/components'

	import InputDefault from './InputDefault.svelte'
	import InputDisabled from './InputDisabled.svelte'
	import InputPlaceholder from './InputPlaceholder.svelte'
	import InputReadOnly from './InputReadOnly.svelte'
	import InputSizes from './InputSizes.svelte'
	import InputTypes from './InputTypes.svelte'
	import InputStates from './InputStates.svelte'
	import InputBorderShapes from './InputBorderShapes.svelte'
</script>

<h1>Input</h1>
<p>Input components are used for collecting user provided information.</p>

<Preview src="./InputDefault.svelte">
	<InputDefault />
</Preview>

<h2>Input types</h2>
<p>You can also change type of input</p>
<Preview vertical src="./InputTypes.svelte">
	<InputTypes />
</Preview>

<h2>Input sizes</h2>
<p>Use size prop to change size of input</p>
<Preview vertical src="./InputSizes.svelte">
	<InputSizes />
</Preview>

<h2>Disabled input</h2>
<p>Set input disabled</p>
<Preview src="./InputDisabled.svelte">
	<InputDisabled />
</Preview>

<h2>Placeholder</h2>
<p>Inputs can have placeholders</p>
<Preview src="./InputPlaceholder.svelte">
	<InputPlaceholder />
</Preview>

<h2>Readonly input</h2>
<p>Set input value unchangable</p>
<Preview src="./InputReadOnly.svelte">
	<InputReadOnly />
</Preview>

<h2>Input states</h2>
<Preview src="./InputStates.svelte">
	<InputStates />
</Preview>

<h2>Input borders</h2>
<Preview src="./InputBorderShapes.svelte">
	<InputBorderShapes />
</Preview>
