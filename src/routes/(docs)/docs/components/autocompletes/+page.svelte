<script>
	import { Doc, Preview } from '$lib/docs-components'

	import AutocompleteDefault from './AutocompleteDefault.svelte'
	import AutocompleteDisabled from './AutocompleteDisabled.svelte'
	import AutocompleteEvent from './AutocompleteEvent.svelte'
	import AutocompleteMultiple from './AutocompleteMultiple.svelte'
	import AutocompleteCreate from './AutocompleteCreate.svelte'
	import AutocompleteObject from './AutocompleteObject.svelte'
	import AutocompleteRemoteData from './AutocompleteRemoteData.svelte'
</script>

<h1>Auto Complete</h1>
<p>
	Autocomplete is a component that allows you to search and select a value from a list of options. It is a combination
	of a text input and a dropdown menu.
</p>

<Doc title="Basic uasge" />
<Preview src="./AutocompleteDefault.svelte">
	<AutocompleteDefault />
</Preview>

<Doc title="Multiple Items">
	You can select multiple items using Autocomplete component using <code>multiple</code> prop.
</Doc>
<Preview src="./AutocompleteMultiple.svelte">
	<AutocompleteMultiple />
</Preview>

<Doc title="Disabled">Autocomplete supports disabled states</Doc>
<Preview src="./AutocompleteDisabled.svelte">
	<AutocompleteDisabled />
</Preview>

<Doc title="Events">
	Autocomplete dispatches <code>change</code> event when the value changed
</Doc>
<Preview src="./AutocompleteEvent.svelte">
	<AutocompleteEvent />
</Preview>

<Doc title="use Object for Item">
	You can have complex objects as item and you need to use <code>text</code> and <code>key</code> props to extract the data
	that Autocomplete needs
</Doc>

<Preview src="./AutocompleteObject.svelte">
	<AutocompleteObject />
</Preview>

<Doc title="Create Items">Also you can create new Item</Doc>
<Preview src="./AutocompleteCreate.svelte">
	<AutocompleteCreate />
</Preview>

<Doc title="Remote Data">Autocomplete supports loading data from async functions</Doc>
<Preview src="./AutocompleteRemoteData.svelte">
	<AutocompleteRemoteData />
</Preview>
