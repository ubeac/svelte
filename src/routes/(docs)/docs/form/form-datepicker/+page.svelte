<script>
	import { Doc, Preview } from '$lib/docs-components'
	import FormDatePickerColumn from './FormDatePickerColumn.svelte'
	import FormDatePickerDisabled from './FormDatePickerDisabled.svelte'
	import FormDatePickerLabel from './FormDatePickerLabel.svelte'
	import FormDatePickerMessage from './FormDatePickerMessage.svelte'
	import FormDatePickerRequired from './FormDatePickerRequired.svelte'
</script>

<h1>Form DatePicker</h1>
<p>
	<code>FormDatePicker</code> component supports all props and events of
	<a href="/docs/components/datepickers">DatePicker</a>
	and also have some additional features like <code>label</code>, <code>hint</code>, <code>required</code>,
	<code>cols</code>, etc. to make it easy to use in a form.
</p>

<Doc title="Label">
	<code>label</code> prop is used to set the label of the FormDatePicker.
</Doc>
<Preview src="./FormDatePickerLabel.svelte">
	<FormDatePickerLabel />
</Preview>

<Doc title="Required">
	<code>required</code> prop is used to set the required state of the FormDatePicker.
</Doc>
<Preview src="./FormDatePickerRequired.svelte">
	<FormDatePickerRequired />
</Preview>

<Doc title="Disabled">
	<code>disabled</code> prop is used to set the disabled state of the FormDatePicker.
</Doc>
<Preview src="./FormDatePickerDisabled.svelte">
	<FormDatePickerDisabled />
</Preview>

<Doc title="Hint/Validation Message">
	<code>hint</code> prop is used to set the hint of the FormDatePicker.
</Doc>
<Preview src="./FormDatePickerMessage.svelte">
	<FormDatePickerMessage />
</Preview>

<Doc title="Layout">
	<code>cols</code> prop is used to set the layout of the FormDatePicker.
</Doc>
<Preview src="./FormDatePickerColumn.svelte">
	<FormDatePickerColumn />
</Preview>
