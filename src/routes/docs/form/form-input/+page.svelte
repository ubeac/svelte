<script>
	import { Preview } from '@ubeac/svelte'
	import FormInputColumn from './FormInputColumn.svelte'
	import FormInputIcon from './FormInputIcon.svelte'
	import FormInputDefault from './FormInputDefault.svelte'
	import FormInputMessage from './FormInputMessage.svelte'
</script>

<h1>Form Input</h1>
<p>
	FormInput is an input and label wrapper component to be used insisde forms. It supports all props and events of
	<a href="/docs/components/inputs">Input</a>
	and also have some additional features.
</p>

<h2>Label, Placeholder, Read-Only, Disabled</h2>
<p>Inputs usually have label, placeholder, disabled, readonly</p>
<Preview src="./FormInputDefault.svelte">
	<FormInputDefault />
</Preview>

<h2>Hint/Validation Message</h2>
<p>You can set a message below of Input like this:</p>
<Preview src="./FormInputMessage.svelte">
	<FormInputMessage />
</Preview>

<h2>Layout</h2>
<p>You can set width of each FormInput in a form using <code>col</code> prop.</p>

<Preview src="./FormInputColumn.svelte">
	<FormInputColumn />
</Preview>

<h2>Icon</h2>
<p>You can set Icon for FormInput by setting <code>icon</code> prop or using <code>icon</code> slot.</p>

<Preview src="./FormInputIcon.svelte">
	<FormInputIcon />
</Preview>
