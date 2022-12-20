<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import RadioGroupColor from './RadioGroupColor.svelte'
	import RadioGroupComplexObject from './RadioGroupComplexObject.svelte'
	import RadioGroupDefault from './RadioGroupDefault.svelte'
	import RadioGroupInline from './RadioGroupInline.svelte'
	import RadioGroupName from './RadioGroupName.svelte'
	import RadioGroupItemsObject from './RadioGroupItemsObject.svelte'
</script>

<h1>RadioGroup</h1>
<p>
	With the help of <code>RadioGroup</code> you can provide groupable functionality for Radios to allow users to select from
	a predefined set of options.
</p>

<Doc title="Default">
	Simpy bind an array to <code>items</code> property
</Doc>
<Preview src="./RadioGroupDefault.svelte">
	<RadioGroupDefault />
</Preview>

<Doc title="Inline Radios">
	using <code>inline</code> prop, you can place all Radios in single line (some Radios will wrap to next line if there are
	many radios)
</Doc>
<Preview src="./RadioGroupInline.svelte">
	<RadioGroupInline />
</Preview>

<Doc title="Items as an Object">
	you can use object instead of Array for <code>items</code> prop.
</Doc>
<Preview vertical src="./RadioGroupItemsObject.svelte">
	<RadioGroupItemsObject />
</Preview>

<Doc title="Complex Object">
	Items can be array of objects instead of array of strings, you should choose <code>text</code> and <code>key</code> fields
	from item's object to use in RadioGroup.
</Doc>
<Preview vertical src="./RadioGroupComplexObject.svelte">
	<RadioGroupComplexObject />
</Preview>

<Doc title="Colors">
	You can change colors of radios by providing <code>color</code> prop to RadioGroup.
</Doc>
<Preview src="./RadioGroupColor.svelte">
	<RadioGroupColor />
</Preview>

<Doc title="Group's Name">
	You can change name of the radio group by providing <code>name</code> prop. otherwise we generate a name randomly.
</Doc>
<Preview vertical src="./RadioGroupName.svelte">
	<RadioGroupName />
</Preview>
