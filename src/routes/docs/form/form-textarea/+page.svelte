<script>
	import Preview from '@ubeac/svelte/components/preview/Preview.svelte'
	import FormTextareaColumn from './FormTextareaColumn.svelte'
	import FormTextareaDisabledLoading from './FormTextareaDisabledLoading.svelte'
	import FormTextareaLabel from './FormTextareaLabel.svelte'
	import FormTextareaMessage from './FormTextareaMessage.svelte'
	import FormTextareaRequired from './FormTextareaRequired.svelte'
</script>

<h1>Form Textarea</h1>
<p>FormTextarea supports all props and events of <a href="/docs/components/textarea">Textarea</a> and also have some additional features</p>

<h2>Label</h2>
<p>You can set a label for FormTextarea.</p>
<Preview vertical src="./FormTextareaLabel.svelte">
	<FormTextareaLabel />
</Preview>

<h2>Hint/Validation Message</h2>
<p>You can set a message below of Textarea like this:</p>
<Preview class="align-items-stretch" vertical src="./FormTextareaMessage.svelte">
	<FormTextareaMessage />
</Preview>

<h2>Required</h2>
<p>You can mark it as a required field like this:</p>

<Preview vertical class="align-items-stretch" src="./FormTextareaRequired.svelte">
	<FormTextareaRequired />
</Preview>

<h2>Set Column Width</h2>
<p>You can set width of each Form elements in a form using <code>cols</code> prop.</p>

<Preview vertical class="align-items-stretch" src="./FormTextareaColumn.svelte">
	<FormTextareaColumn />
</Preview>

<h2>Disabled, Read-Only & Loading</h2>
<p>FormTextarea supports disabled, Read-Only and loading states.</p>

<Preview vertical class="align-items-stretch" src="./FormTextareaDisabledLoading.svelte">
	<FormTextareaDisabledLoading />
</Preview>