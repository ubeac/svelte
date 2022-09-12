<script>
	import { Alert, Preview } from '@ubeac/svelte'

	import AutocompleteDefault from './AutocompleteDefault.svelte'
	import AutocompleteDisabledLoading from './AutocompleteDisabledLoading.svelte'
	import AutocompleteEvent from './AutocompleteEvent.svelte'
	import AutocompleteMultiple from './AutocompleteMultiple.svelte'
	import AutocompleteObject from './AutocompleteObject.svelte'
	import AutocompleteObjectItems from './AutocompleteObjectItems.svelte'
	import AutocompletePreview from './AutocompletePreview.svelte'
</script>

<h1>Auto Complete</h1>
<p>You can use Autocomplete to search and filter large sets of data</p>

<Preview src="./AutocompleteDefault.svelte">
	<div class="example-autocomplete">
		<AutocompleteDefault />
	</div>
</Preview>

<h2>Multiple Items</h2>
<p>You can select multiple items using Autocomplete component using <code>multiple</code> prop</p>

<Preview src="./AutocompleteMultiple.svelte">
	<div class="example-autocomplete">
		<AutocompleteMultiple />
	</div>
</Preview>

<h2>Loading and Disabled</h2>
<p>Autocomplete supports disabled and loading states</p>

<Preview src="./AutocompleteDisabledLoading.svelte">
	<div class="example-autocomplete">
		<AutocompleteDisabledLoading />
	</div>
</Preview>

<h2>Events</h2>

<p>Autocomplete dispatches <code>changed</code> when the value changed</p>

<Preview src="./AutocompleteEvent.svelte">
	<div class="example-autocomplete">
		<AutocompleteEvent />
	</div>
</Preview>
<br />
<Alert title="Note" type="success">
	All @ubeac/svelte components support native DOM events like on:click, on:focus, on:blur, etc.
</Alert>

<h2>use Object for Item</h2>
<p>
	You can have complex objects as item and you need to use <code>text</code> and <code>key</code> props to extract the data
	that Autocomplete needs
</p>
<Preview src="./AutocompleteObjectItems.svelte">
	<div class="example-autocomplete">
		<AutocompleteObjectItems />
	</div>
</Preview>

<h2>Items as Object</h2>
<p>You can pass <code>items</code> prop as object (instead of array)</p>
<Preview src="./AutocompleteObject.svelte">
	<div class="example-autocomplete">
		<AutocompleteObject />
	</div>
</Preview>

<h2>Preview Mode</h2>
<p>Autocomplete supports preview mode by passing <code>preview</code> prop</p>
<Preview src="./AutocompletePreview.svelte">
	<div class="example-autocomplete">
		<AutocompletePreview />
	</div>
</Preview>

<style>
	h2 {
		margin-top: 2rem;
	}

	.example-autocomplete {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
