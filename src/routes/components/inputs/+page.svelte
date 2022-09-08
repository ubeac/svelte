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

<Preview src="./InputTypes.svelte">
	<div class="example-inputs">
		<InputTypes />
	</div>
</Preview>

<h2>Sizes</h2>
<p>Use size prop to change size of input</p>
<Preview src="./InputSizes.svelte">
	<div class="example-inputs">
		<InputSizes />
	</div>
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
<Preview src="./InputValue.svelte">
	<div class="example-inputs">
		<InputValue />
	</div>
</Preview>

<style>
	.example-inputs {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	h2 {
		margin-top: 2rem;
	}
</style>
