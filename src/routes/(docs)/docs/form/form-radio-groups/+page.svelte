<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import FormRadioGroupBasic from './FormRadioGroupBasic.svelte'
	import FormRadioGroupLabel from './FormRadioGroupLabel.svelte'
	import FormRadioGroupColor from './FormRadioGroupColor.svelte'
	import FormRadioGroupArrayBinding from './FormRadioGroupArrayBinding.svelte'
	import FormRadioGroupInline from './FormRadioGroupInline.svelte'
	import FormRadioGroupReverse from './FormRadioGroupReverse.svelte'
</script>

<h1>FormRadioGroup</h1>

<Doc title="Basic usage">Basic usage</Doc>
<Preview src="./FormRadioGroupBasic.svelte">
	<FormRadioGroupBasic />
</Preview>

<Doc title="Custom label">
	Set a function to the <code>labelFn</code> (return string) to customize the label.
</Doc>
<Preview src="./FormRadioGroupLabel.svelte">
	<FormRadioGroupLabel />
</Preview>

<Doc title="Colors">
	Set <code>color</code> property to define background color for all <code>Radios</code> inside the
	<code>RadioGroup</code>
</Doc>
<Preview src="./FormRadioGroupColor.svelte">
	<FormRadioGroupColor />
</Preview>

<Doc title="Inline">
	Set <code>inline</code> property to display inline all <code>Radios</code> inside the
	<code>RadioGroup</code>
</Doc>
<Preview src="./FormRadioGroupInline.svelte">
	<FormRadioGroupInline />
</Preview>

<Doc title="Reverse">
	Set <code>reverse</code> property to reverse position of all <code>Radios</code> inside the
	<code>RadioGroup</code>
</Doc>
<Preview src="./FormRadioGroupReverse.svelte">
	<FormRadioGroupReverse />
</Preview>

<Doc title="Binding">
	Set an array of objects to <code>items</code> property and define <code>label</code>.
</Doc>
<Preview src="./FormRadioGroupArrayBinding.svelte">
	<FormRadioGroupArrayBinding />
</Preview>
