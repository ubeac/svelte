<script>
	import { Doc, Preview } from '$lib/docs-components'
	import FormAutocompleteColumn from './FormAutocompleteColumn.svelte'
	import FormAutocompleteDisabled from './FormAutocompleteDisabled.svelte'
	import FormAutocompleteKey from './FormAutocompleteKey.svelte'
	import FormAutocompleteLabel from './FormAutocompleteLabel.svelte'
	import FormAutocompleteMessage from './FormAutocompleteMessage.svelte'
	import FormAutocompleteObject from './FormAutocompleteObject.svelte'
	import FormAutocompletePlaceholder from './FormAutocompletePlaceholder.svelte'
	import FormAutocompleteRequired from './FormAutocompleteRequired.svelte'
	import FormAutocompleteSizes from './FormAutocompleteSizes.svelte'
	import FormAutocompleteStates from './FormAutocompleteStates.svelte'
</script>

<Doc title="Form Autocomplete">
	FormAutocomplete supports all props and events of <a href="/docs/components/autocompletes">Autocomplete</a> and also have
	some additional features
</Doc>

<Doc title="Label">You can set a label for FormAutocomplete.</Doc>
<Preview src="./FormAutocompleteLabel.svelte">
	<FormAutocompleteLabel />
</Preview>

<Doc title="Disabled">FormAutocomplete supports disabled state.</Doc>
<Preview src="./FormAutocompleteDisabled.svelte">
	<FormAutocompleteDisabled />
</Preview>

<Doc title="Placeholder">Autocomplete can have placeholders.</Doc>
<Preview src="./FormAutocompletePlaceholder.svelte">
	<FormAutocompletePlaceholder />
</Preview>

<Doc title="Sizes">
	You may also choose from small and large custom Autocomplete to match our similarly sized text inputs.
</Doc>
<Preview vertical src="./FormAutocompleteSizes.svelte">
	<FormAutocompleteSizes />
</Preview>

<Doc title="Complex Items">
	You can have complex objects as item and you need to use <code>itemKey</code> and <code>itemValue</code> props to extract
	the data that Autocomplete needs
</Doc>
<Preview src="./FormAutocompleteObject.svelte">
	<FormAutocompleteObject />
</Preview>

<Doc title="States">
	You can set the <code>valid</code> or <code>invalid</code> boolean properties to apply the valid or invalid state to a
	Autocomplete.
</Doc>
<Preview src="./FormAutocompleteStates.svelte">
	<FormAutocompleteStates />
</Preview>

<Doc title="Hint/Validation Message">You can set a message below of Autocomplete like this</Doc>
<Preview src="./FormAutocompleteMessage.svelte">
	<FormAutocompleteMessage />
</Preview>

<Doc title="Layout">
	You can set width of each Form elements in a form using <code>cols</code> prop.
</Doc>
<Preview src="./FormAutocompleteColumn.svelte">
	<FormAutocompleteColumn />
</Preview>

<Doc title="Required">You can mark it as a required field like this</Doc>
<Preview src="./FormAutocompleteRequired.svelte">
	<FormAutocompleteRequired />
</Preview>

<Doc title="Custom Key">You can choose a key to increase performance.</Doc>
<Preview src="./FormAutocompleteKey.svelte">
	<FormAutocompleteKey />
</Preview>
