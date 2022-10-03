<script>
	import { Preview } from '@ubeac/svelte'
	import FormAutocompleteColumn from './FormAutocompleteColumn.svelte'
	import FormAutocompleteDisabledLoading from './FormAutocompleteDisabledLoading.svelte'
	import FormAutocompleteLabel from './FormAutocompleteLabel.svelte'
	import FormAutocompleteMessage from './FormAutocompleteMessage.svelte'
	import FormAutocompleteRequired from './FormAutocompleteRequired.svelte'
</script>

<h1>Form Autocomplete</h1>
<p>
	FormAutocomplete supports all props and events of <a href="/docs/components/autocomplete">Autocomplete</a> and also have
	some additional features
</p>

<h2>Label</h2>
<p>You can set a label for FormAutocomplete.</p>
<Preview vertical src="./FormAutocompleteLabel.svelte">
	<FormAutocompleteLabel />
</Preview>

<h2>Hint/Validation Message</h2>
<p>You can set a message below of Autocomplete like this:</p>
<Preview class="align-items-stretch" vertical src="./FormAutocompleteMessage.svelte">
	<FormAutocompleteMessage />
</Preview>

<h2>Required</h2>
<p>You can mark it as a required field like this:</p>

<Preview vertical class="align-items-stretch" src="./FormAutocompleteRequired.svelte">
	<FormAutocompleteRequired />
</Preview>

<h2>Set Column Width</h2>
<p>You can set width of each Form elements in a form using <code>cols</code> prop.</p>

<Preview vertical class="align-items-stretch" src="./FormAutocompleteColumn.svelte">
	<FormAutocompleteColumn />
</Preview>

<h2>Disabled, Read-Only & Loading</h2>
<p>FormAutocomplete supports disabled, Read-Only and loading states.</p>

<Preview vertical class="align-items-stretch" src="./FormAutocompleteDisabledLoading.svelte">
	<FormAutocompleteDisabledLoading />
</Preview>
