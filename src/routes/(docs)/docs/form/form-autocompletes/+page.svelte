<script>
	import { Doc, Preview } from '$lib/docs-components'
	import FormAutocompleteColumn from './FormAutocompleteColumn.svelte'
	import FormAutocompleteCreate from './FormAutocompleteCreate.svelte'
	import FormAutocompleteDisabled from './FormAutocompleteDisabled.svelte'
	import FormAutocompleteLabel from './FormAutocompleteLabel.svelte'
	import FormAutocompleteMessage from './FormAutocompleteMessage.svelte'
	import FormAutocompleteRequired from './FormAutocompleteRequired.svelte'
</script>

<Doc title="Form Autocomplete">
	FormAutocomplete supports all props and events of <a href="/docs/components/autocompletes">Autocomplete</a> and also have
	some additional features
</Doc>

<Doc title="Label">You can set a label for FormAutocomplete.</Doc>
<Preview vertical src="./FormAutocompleteLabel.svelte">
	<FormAutocompleteLabel />
</Preview>

<Doc title="Hint/Validation Message">You can set a message below of Autocomplete like this</Doc>
<Preview class="align-items-stretch" vertical src="./FormAutocompleteMessage.svelte">
	<FormAutocompleteMessage />
</Preview>

<Doc title="Required">You can mark it as a required field like this:</Doc>

<Preview vertical class="align-items-stretch" src="./FormAutocompleteRequired.svelte">
	<FormAutocompleteRequired />
</Preview>

<Doc title="Layout">
	You can set width of each Form elements in a form using <code>cols</code> prop.
</Doc>
<Preview vertical class="align-items-stretch" src="./FormAutocompleteColumn.svelte">
	<FormAutocompleteColumn />
</Preview>

<Doc title="Disabled">FormAutocomplete supports disabled state.</Doc>
<Preview vertical class="align-items-stretch" src="./FormAutocompleteDisabled.svelte">
	<FormAutocompleteDisabled />
</Preview>

<Doc title="Remote Data">You can load items from external api using async function.</Doc>
<Preview vertical class="align-items-stretch" src="./FormAutocompleteCreate.svelte">
	<FormAutocompleteCreate />
</Preview>

<Doc title="Create new item">You can create new item if item is not in the list.</Doc>
<Preview vertical class="align-items-stretch" src="./FormAutocompleteCreate.svelte">
	<FormAutocompleteCreate />
</Preview>
