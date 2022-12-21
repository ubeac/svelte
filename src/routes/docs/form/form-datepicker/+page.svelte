<script>
	import { Preview } from '@ubeac/svelte'
	import FormDatePickerColumn from './FormDatePickerColumn.svelte'
	import FormDatePickerDisabledLoading from './FormDatePickerDisabledLoading.svelte'
	import FormDatePickerIcon from './FormDatePickerIcon.svelte'
	import FormDatePickerLabel from './FormDatePickerLabel.svelte'
	import FormDatePickerMessage from './FormDatePickerMessage.svelte'
	import FormDatePickerRequired from './FormDatePickerRequired.svelte'
</script>

<h1>Form DatePicker</h1>
<p>
	FormDatePicker supports all props and events of <a href="/docs/components/datepickers">DatePicker</a> and also have some
	additional features
</p>

<h2>Label</h2>
<p>You can set a label for FormDatePicker.</p>
<Preview vertical src="./FormDatePickerLabel.svelte">
	<FormDatePickerLabel />
</Preview>

<h2>Hint/Validation Message</h2>
<p>You can set a message below of DatePicker like this:</p>
<Preview class="align-items-stretch" vertical src="./FormDatePickerMessage.svelte">
	<FormDatePickerMessage />
</Preview>

<h2>Required</h2>
<p>You can mark it as a required field like this:</p>

<Preview vertical class="align-items-stretch" src="./FormDatePickerRequired.svelte">
	<FormDatePickerRequired />
</Preview>

<h2>Set Column Width</h2>
<p>You can set width of each Form elements in a form using <code>cols</code> prop.</p>

<Preview vertical class="align-items-stretch" src="./FormDatePickerColumn.svelte">
	<FormDatePickerColumn />
</Preview>

<h2>Disabled, Read-Only & Loading</h2>
<p>FormDatePicker supports disabled, Read-Only and loading states.</p>

<Preview vertical class="align-items-stretch" src="./FormDatePickerDisabledLoading.svelte">
	<FormDatePickerDisabledLoading />
</Preview>

<h2>Icon</h2>
<p>You can set Icon for FormDatePicker by setting <code>icon</code> and <code>iconEnd</code> props.</p>

<Preview vertical class="align-items-stretch" src="./FormDatePickerIcon.svelte">
	<FormDatePickerIcon />
</Preview>
