<script>
	import { Doc, Preview } from '$lib/docs-components'

	import AutocompleteDefault from './AutocompleteDefault.svelte'
	import AutocompleteDisabled from './AutocompleteDisabled.svelte'
	import AutocompleteKey from './AutocompleteKey.svelte'
	import AutocompleteObject from './AutocompleteObject.svelte'
	import AutocompletePlaceholder from './AutocompletePlaceholder.svelte'
	import AutocompleteSizes from './AutocompleteSizes.svelte'
	import AutocompleteStates from './AutocompleteStates.svelte'
</script>

<h1>Auto Complete</h1>
<p>
	Autocomplete is a component that allows you to search and select a value from a list of options. It is a combination
	of a text input and a dropdown menu.
</p>

<Doc title="Default" />
<Preview src="./AutocompleteDefault.svelte">
	<AutocompleteDefault />
</Preview>

<Doc title="Disabled">Autocomplete supports disabled states</Doc>
<Preview src="./AutocompleteDisabled.svelte">
	<AutocompleteDisabled />
</Preview>

<Doc title="Placeholder">Autocomplete can have placeholders.</Doc>
<Preview src="./AutocompletePlaceholder.svelte">
	<AutocompletePlaceholder />
</Preview>

<Doc title="Sizes"
	>You may also choose from small and large custom selects to match our similarly sized text inputs.</Doc>
<Preview vertical src="./AutocompleteSizes.svelte">
	<div class="custom-class"><AutocompleteSizes /></div>
</Preview>

<Doc title="Complex Items">
	You can have complex objects as item and you need to use <code>itemKey</code> and <code>itemValue</code> props to extract
	the data that Autocomplete needs
</Doc>
<Preview src="./AutocompleteObject.svelte">
	<AutocompleteObject />
</Preview>

<Doc title="States">
	You can set the <code>valid</code> or <code>invalid</code> boolean properties to apply the valid or invalid state to a
	Autocomplete.
</Doc>
<Preview src="./AutocompleteStates.svelte">
	<div class="custom-class"><AutocompleteStates /></div>
</Preview>

<Doc title="Custom Key">You can choose a key to increase performance.</Doc>
<Preview src="./AutocompleteKey.svelte">
	<AutocompleteKey />
</Preview>

<style>
	.custom-class > :global(.u-autocomplete) {
		margin: 0.25rem 0;
	}
</style>
