<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import FormCheckboxGroupBasic from './FormCheckboxGroupBasic.svelte'
	import FormCheckboxGroupLabel from './FormCheckboxGroupLabel.svelte'
	import FormCheckboxGroupColor from './FormCheckboxGroupColor.svelte'
	import FormCheckboxGroupArrayBinding from './FormCheckboxGroupArrayBinding.svelte'
	import FormCheckboxGroupInline from './FormCheckboxGroupInline.svelte'
</script>

<h1>FormCheckboxGroup</h1>

<Doc title="Basic usage">
	FormCheckboxGroup is similar to <a href="">CheckboxGroup</a> component with some additional features.
</Doc>
<Preview src="./FormCheckboxGroupBasic.svelte">
	<FormCheckboxGroupBasic />
</Preview>

<Doc title="Custom label">
	<!--  -->
</Doc>
<Preview src="./FormCheckboxGroupLabel.svelte">
	<FormCheckboxGroupLabel />
</Preview>

<Doc title="Colors">
	Set <code>color</code> property to define background color for all <code>Checkboxes</code> inside the
	<code>CheckboxGroup</code>
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
