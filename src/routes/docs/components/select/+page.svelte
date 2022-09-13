<script>
	import { Preview } from '@ubeac/svelte'
	import SelectDefault from './SelectDefault.svelte'
	import SelectItems from './SelectItems.svelte'
	import SelectMultiple from './SelectMultiple.svelte'
	import SelectPlaceholder from './SelectPlaceholder.svelte'
</script>

<h1>Select</h1>
<p>Add one of the available selects a dropdown select - to let users choose from a predefined set of options.</p>
<Preview src="./SelectDefault.svelte">
	<SelectDefault />
</Preview>

<h1>Select Items</h1>
<p>Select can have custom item names.</p>
<Preview src="./SelectItems.svelte">
	<SelectItems />
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

<style>
	h1 {
		margin-top: 2rem;
	}

	.example-formselect {
		width: 100%;
	}
</style>
