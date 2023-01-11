<script>
	import { Doc, Preview } from '$lib/docs-components'
	import CheckboxGroupInline from './CheckboxGroupInline.svelte'
	import CheckboxGroupItems from './CheckboxGroupItems.svelte'
	import CheckboxGroupDefault from './CheckboxGroupDefault.svelte'
	import CheckboxGroupReverse from './CheckboxGroupReverse.svelte'
	import CheckboxGroupLabel from './CheckboxGroupLabel.svelte'
	import CheckboxGroupColor from './CheckboxGroupColor.svelte'
</script>

<h1>Checkbox Group</h1>

<Doc title="Basic">
	CheckboxGroup is a wrapper for <code>Checkbox</code> component, it can be used to group multiple checkboxes in one component.
</Doc>
<Preview vertical src="./CheckboxGroupDefault.svelte">
	<CheckboxGroupDefault />
</Preview>

<Doc title="Custom Label">
	You can use default slot to pass a custom label for <code>CheckboxGroup</code>.
</Doc>
<Preview vertical src="./CheckboxGroupLabel.svelte">
	<CheckboxGroupLabel />
</Preview>

<Doc title="Color">
	Set <code>color</code> property to define background color for all <code>Checkbox</code> inside the
	<code>CheckboxGroup</code>
</Doc>
<Preview vertical src="./CheckboxGroupColor.svelte">
	<CheckboxGroupColor />
</Preview>

<Doc title="Inline">
	Set <code>inline</code> property to display all checkboxes in one line.
</Doc>
<Preview src="./CheckboxGroupInline.svelte">
	<CheckboxGroupInline />
</Preview>

<Doc title="Reverse">
	<code>reverse</code> property can be used to put the checkboxes on the opposite side.
</Doc>
<Preview src="./CheckboxGroupReverse.svelte">
	<CheckboxGroupReverse />
</Preview>

<Doc title="Binding">
	You can use <code>items</code> property to pass an array of items to <code>CheckboxGroup</code> component.
</Doc>
<Preview src="./CheckboxGroupItems.svelte">
	<CheckboxGroupItems />
</Preview>
