<script>
	import { Preview } from '@ubeac/svelte'
	import FormSelectDefault from './FormSelectDefault.svelte'
	import FormSelectIcon from './FormSelectIcon.svelte'
	import FormSelectLoading from './FormSelectLoading.svelte'
	import SelectDefault from './SelectDefault.svelte'
	import SelectMultiple from './SelectMultiple.svelte'
	import SelectPlaceholder from './SelectPlaceholder.svelte'
</script>

<h1>Select</h1>
<p>Add one of the available selects a dropdown select - to let users choose from a predefined set of options.</p>
<Preview src="./SelectDefault.svelte">
	<SelectDefault />
</Preview>

<h1>Select Placeholder</h1>
<p>Select can have placeholders.</p>
<Preview src="./SelectPlaceholder.svelte">
	<SelectPlaceholder />
</Preview>

<h1>Multiple Select</h1>
<p>
	Add one of the available selects - either a multiple choice select - to let users choose from a predefined set of
	options.
</p>
<Preview src="./SelectMultiple.svelte">
	<SelectMultiple />
</Preview>

<h1>FormSelect</h1>
<p>Add one of the available selects a dropdown select - to let users choose from a predefined set of options.</p>
<Preview src="./FormSelectDefault.svelte">
	<div class="example-formselect">
		<FormSelectDefault />
	</div>
</Preview>

<h1>FormSelect Loading</h1>
<p>Select can have loading.</p>
<Preview src="./FormSelectLoading.svelte">
	<div class="example-formselect">
		<FormSelectLoading />
	</div>
</Preview>

<h1>FormSelect Icon</h1>
<p>Select can have icon.</p>
<Preview src="./FormSelectIcon.svelte">
	<div class="example-formselect">
		<FormSelectIcon />
	</div>
</Preview>

<style>
	h1 {
		margin-top: 20px;
	}

	.example-formselect {
		width: 100%;
	}
</style>
