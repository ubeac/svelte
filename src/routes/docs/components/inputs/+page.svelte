<script>
	import { Preview } from '$lib/components'

	import InputDefault from './InputDefault.svelte'
	import InputDisabled from './InputDisabled.svelte'
	import InputPlaceholder from './InputPlaceholder.svelte'
	import InputReadOnly from './InputReadOnly.svelte'
	import InputSizes from './InputSizes.svelte'
	import InputTypes from './InputTypes.svelte'
	import InputValue from './InputValue.svelte'
</script>

<h1>Input</h1>
<p>Input components are used for collecting user provided information.</p>

<Preview src="./InputDefault.svelte">
	<InputDefault />
</Preview>

<h2>Types</h2>
<p>You can also change type of input</p>

<Preview vertical src="./InputTypes.svelte">
	<InputTypes />
</Preview>

<h2>Sizes</h2>
<p>Use size prop to change size of input</p>
<Preview vertical src="./InputSizes.svelte">
	<InputSizes />
</Preview>

<h2>Disabled</h2>
<p>Set input disabled</p>
<Preview src="./InputDisabled.svelte">
	<InputDisabled />
</Preview>

<h2>Placeholder</h2>
<p>Inputs can have placeholders</p>
<Preview src="./InputPlaceholder.svelte">
	<InputPlaceholder />
</Preview>

<h2>ReadOnly</h2>
<p>Set input value unchangable</p>
<Preview src="./InputReadOnly.svelte">
	<InputReadOnly />
</Preview>

<h2>Value</h2>
<p>You can get and set input value using bind:value</p>
<Preview vertical src="./InputValue.svelte">
	<InputValue />
</Preview>
