<script>
	import { Preview } from '@ubeac/svelte'
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
<Preview vertical src="./RadioGroupDefault.svelte">
	<RadioGroupDefault />
</Preview>

<h2>Inline Radios</h2>
<p>
	using <code>inline</code> prop, you can place all Radios in single line (some Radios will wrap to next line if there are
	many radios)
</p>
<Preview src="./RadioGroupInline.svelte">
	<RadioGroupInline />
</Preview>

<h2>Items as an Object</h2>
<p>you can use object instead of Array for <code>items</code> prop.</p>
<Preview vertical src="./RadioGroupItemsObject.svelte">
	<RadioGroupItemsObject />
</Preview>

<h2>Complex Object</h2>
<p>
	Items can be array of objects instead of array of strings, you should choose <code>text</code> and <code>key</code> fields
	from item's object to use in RadioGroup.
</p>
<Preview vertical src="./RadioGroupComplexObject.svelte">
	<RadioGroupComplexObject />
</Preview>

<h2>Colors</h2>
<p>You can change colors of radios by providing <code>color</code> prop to RadioGroup.</p>
<Preview src="./RadioGroupColor.svelte">
	<RadioGroupColor />
</Preview>

<h2>Group's Name</h2>
<p>
	You can change name of the radio group by providing <code>name</code> prop. otherwise we generate a name randomly.
</p>
<Preview vertical src="./RadioGroupName.svelte">
	<RadioGroupName />
</Preview>
