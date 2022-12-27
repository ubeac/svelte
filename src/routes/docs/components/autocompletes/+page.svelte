<script>
	import { Doc, Preview } from '@ubeac/svelte'

	import AutocompleteDefault from './AutocompleteDefault.svelte'
	import AutocompleteDisabled from './AutocompleteDisabled.svelte'
	import AutocompleteEvent from './AutocompleteEvent.svelte'
	import AutocompleteMultiple from './AutocompleteMultiple.svelte'
	import AutocompleteCreate from './AutocompleteCreate.svelte'
	import AutocompleteObject from './AutocompleteObject.svelte'
	import AutocompleteRemoteData from './AutocompleteRemoteData.svelte'
	import FormAutocomplete from '@ubeac/svelte/components/Form/FormAutocomplete.svelte'
</script>

<h1>Auto Complete</h1>
<p>You can use Autocomplete to search and filter large sets of data</p>

<Doc title="Default">
	<!--  -->
</Doc>

<Preview src="./AutocompleteDefault.svelte">
	<div class="example-autocomplete">
		<AutocompleteDefault />
	</div>
</Preview>

<Doc title="Multiple Items">
	You can select multiple items using Autocomplete component using <code>multiple</code> prop.
</Doc>

<Preview src="./AutocompleteMultiple.svelte">
	<div class="example-autocomplete">
		<AutocompleteMultiple />
	</div>
</Preview>

<Doc title="Disabled">Autocomplete supports disabled states</Doc>

<Preview src="./AutocompleteDisabled.svelte">
	<div class="example-autocomplete">
		<AutocompleteDisabled />
	</div>
</Preview>

<Doc title="Events">
	Autocomplete dispatches <code>change</code> event when the value changed
</Doc>

<Preview src="./AutocompleteEvent.svelte">
	<div class="example-autocomplete">
		<AutocompleteEvent />
	</div>
</Preview>
<br />

<Doc title="use Object for Item">
	You can have complex objects as item and you need to use <code>text</code> and <code>key</code> props to extract the data
	that Autocomplete needs
</Doc>

<Preview src="./AutocompleteObject.svelte">
	<div class="example-autocomplete">
		<AutocompleteObject />
	</div>
</Preview>

<FormAutocomplete />

<Doc title="Create Items">Also you can create new Item</Doc>

<Preview src="./AutocompleteCreate.svelte">
	<div class="example-autocomplete">
		<AutocompleteCreate />
	</div>
</Preview>

<Doc title="Remote Data">Autocomplete supports loading data from async functions</Doc>
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
