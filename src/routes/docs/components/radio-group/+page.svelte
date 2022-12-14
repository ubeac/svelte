<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import RadioGroupBasic from './RadioGroupBasic.svelte'
	import RadioGroupLabel from './RadioGroupLabel.svelte'
	import RadioGroupColor from './RadioGroupColor.svelte'
	import RadioGroupArrayBinding from './RadioGroupArrayBinding.svelte'
	import RadioGroupInline from './RadioGroupInline.svelte'
	import RadioGroupReverse from './RadioGroupReverse.svelte'
	import RadioGroupItemsObject from './RadioGroupItemsObject.svelte'
</script>

<h1>RadioGroup</h1>

<Doc title="Basic usage">Basic usage</Doc>
<Preview src="./RadioGroupBasic.svelte">
	<RadioGroupBasic />
</Preview>

<Doc title="Custom label">
	Set a function to the <code>label</code> property to customize the label.
</Doc>
<Preview src="./RadioGroupLabel.svelte">
	<RadioGroupLabel />
</Preview>

<Doc title="Colors">
	Set <code>color</code> property to define background color for all <code>Radios</code> inside the
	<code>RadioGroup</code>
</Doc>
<Preview src="./RadioGroupColor.svelte">
	<RadioGroupColor />
</Preview>

<Doc title="Inline">
	Set <code>inline</code> property to display inline all <code>Radios</code> inside the
	<code>RadioGroup</code>
</Doc>
<Preview src="./RadioGroupInline.svelte">
	<RadioGroupInline />
</Preview>

<Doc title="Reverse">
	Set <code>reverse</code> property to reverse position of all <code>Radios</code> inside the
	<code>RadioGroup</code></Doc>
<Preview src="./RadioGroupReverse.svelte">
	<RadioGroupReverse />
</Preview>

<Doc title="Binding">
	Set an array of objects to <code>items</code> property and define <code>label</code>.
</Doc>
<Preview src="./RadioGroupArrayBinding.svelte">
	<RadioGroupArrayBinding />
</Preview>
