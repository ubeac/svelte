<script>
	import { Doc, Preview } from '$lib/docs-components'
	import FormCheckboxGroupBasic from './FormCheckboxGroupBasic.svelte'
	import FormCheckboxGroupLabel from './FormCheckboxGroupLabel.svelte'
	import FormCheckboxGroupColor from './FormCheckboxGroupColor.svelte'
	import FormCheckboxGroupArrayBinding from './FormCheckboxGroupArrayBinding.svelte'
	import FormCheckboxGroupInline from './FormCheckboxGroupInline.svelte'
	import FormCheckboxGroupLayout from './FormCheckboxGroupLayout.svelte'
</script>

<h1>FormCheckboxGroup</h1>

<Doc title="Basic usage">
	FormCheckboxGroup is similar to <a href="/docs/components/checkbox-groups">CheckboxGroup</a> component with decoration features
	inside the form.
</Doc>
<Preview src="./FormCheckboxGroupBasic.svelte">
	<FormCheckboxGroupBasic />
</Preview>

<Doc title="Custom label">
	You can use default slot to pass a custom label for <code>FormCheckboxGroup</code>.
</Doc>
<Preview src="./FormCheckboxGroupLabel.svelte">
	<FormCheckboxGroupLabel />
</Preview>

<Doc title="Colors">
	Set <code>color</code> property to define background color for all <code>Checkboxes</code>.
</Doc>
<Preview src="./FormCheckboxGroupColor.svelte">
	<FormCheckboxGroupColor />
</Preview>

<Doc title="Inline">
	Set <code>inline</code> property to display inline all <code>Checkboxes</code> inside the
	<code>CheckboxGroup</code>
</Doc>
<Preview src="./FormCheckboxGroupInline.svelte">
	<FormCheckboxGroupInline />
</Preview>

<Doc title="Binding">
	Set an array of objects to <code>items</code> property and define <code>label</code>.
</Doc>
<Preview src="./FormCheckboxGroupArrayBinding.svelte">
	<FormCheckboxGroupArrayBinding />
</Preview>

<Doc title="Layout">
	Use default <code>row</code> and <code>col</code> properties to change layout of the FormCheckboxes inside forms.
</Doc>
<Preview src="./FormCheckboxGroupLayout.svelte">
	<FormCheckboxGroupLayout />
</Preview>
