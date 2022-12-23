<script>
	import { Alert, Preview } from '@ubeac/svelte'

	import AutocompleteDefault from './AutocompleteDefault.svelte'
	import AutocompleteDisabled from './AutocompleteDisabled.svelte'
	import AutocompleteEvent from './AutocompleteEvent.svelte'
	import AutocompleteMultiple from './AutocompleteMultiple.svelte'
	import AutocompleteCreate from './AutocompleteCreate.svelte'
	import AutocompleteObjectItems from './AutocompleteObjectItems.svelte'
	import AutocompleteRemoteData from './AutocompleteRemoteData.svelte'
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

<h2>Disabled</h2>
<p>Autocomplete supports disabled states</p>

<Preview src="./AutocompleteDisabled.svelte">
	<div class="example-autocomplete">
		<AutocompleteDisabled />
	</div>
</Preview>

<h2>Events</h2>

<p>Autocomplete dispatches <code>change</code> event when the value changed</p>

<Preview src="./AutocompleteEvent.svelte">
	<div class="example-autocomplete">
		<AutocompleteEvent />
	</div>
</Preview>
<br />

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

<h2>Create Items</h2>
<p>Also you can create new Item</p>
<Preview src="./AutocompleteCreate.svelte">
	<div class="example-autocomplete">
		<AutocompleteCreate />
	</div>
</Preview>

<h2>Remote Data</h2>
<p>Autocomplete supports loading data from async functions</p>
<Preview src="./AutocompleteRemoteData.svelte">
	<div class="example-autocomplete">
		<AutocompleteRemoteData />
	</div>
</Preview>

<style>
	.example-autocomplete {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
