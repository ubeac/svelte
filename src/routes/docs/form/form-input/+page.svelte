<script>
	import { Preview } from '@ubeac/svelte'
	import FormInputColumn from './FormInputColumn.svelte'
	import FormInputDisabledLoading from './FormInputDisabledLoading.svelte'
	import FormInputIcon from './FormInputIcon.svelte'
	import FormInputLabel from './FormInputLabel.svelte'
	import FormInputMessage from './FormInputMessage.svelte'
	import FormInputRequired from './FormInputRequired.svelte'
</script>

<h1>Form Input</h1>
<p>
	FormInput supports all props and events of <a href="/docs/components/inputs">Input</a> and also have some additional features
</p>

<h2>Label</h2>
<p>You can set a label for FormInput.</p>
<Preview vertical src="./FormInputLabel.svelte">
	<FormInputLabel />
</Preview>

<h2>Hint/Validation Message</h2>
<p>You can set a message below of Input like this:</p>
<Preview class="align-items-stretch" vertical src="./FormInputMessage.svelte">
	<FormInputMessage />
</Preview>

<h2>Required</h2>
<p>You can mark a field as required like this:</p>

<Preview vertical class="align-items-stretch" src="./FormInputRequired.svelte">
	<FormInputRequired />
</Preview>

<h2>Set Column Width</h2>
<p>You can set width of each FormInput in a form using <code>cols</code> prop.</p>

<Preview vertical class="align-items-stretch" src="./FormInputColumn.svelte">
	<FormInputColumn />
</Preview>

<h2>Disabled, Read-Only & Loading</h2>
<p>FormInput supports disabled, Read-Only and loading states.</p>

<Preview vertical class="align-items-stretch" src="./FormInputDisabledLoading.svelte">
	<FormInputDisabledLoading />
</Preview>

<h2>Icon</h2>
<p>You can set Icon for FormInput by setting <code>icon</code> prop or using <code>icon</code> slot.</p>

<Preview vertical class="align-items-stretch" src="./FormInputIcon.svelte">
	<FormInputIcon />
</Preview>
