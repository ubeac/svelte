<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import CheckboxGroupInline from './CheckboxGroupInline.svelte'
	import CheckboxGroupItems from './CheckboxGroupItems.svelte'
	import CheckboxGroupDefault from './CheckboxGroupDefault.svelte'
	import CheckboxGroupReverse from './CheckboxGroupReverse.svelte'
</script>

<h1>Checkbox Group</h1>
<p>
	Use CheckboxGroup if you want to allow users to select more than one option from a set of predefined options or to
	turn an option on or off.
</p>

<Doc title="Basic">Basic Usage</Doc>
<Preview vertical src="./CheckboxGroupDefault.svelte">
	<CheckboxGroupDefault />
</Preview>

<Doc title="Checkbox Group Inline"
	>CheckboxGroup can have inline property for all items to be in one horizontal line.</Doc>
<Preview src="./CheckboxGroupInline.svelte">
	<CheckboxGroupInline />
</Preview>

<Doc title="Reverse">
	Set <code>reverse</code> property to reverse position of all <code>Checkboxes</code> inside the
	<code>CheckboxGroup</code>
</Doc>
<Preview src="./CheckboxGroupReverse.svelte">
	<CheckboxGroupReverse />
</Preview>

<Doc title="Checkbox Group Items">
	CheckboxGroup items can have custom items property name, for convenience in displaying items in the checkbox, this
	feature is for other components like ( FormCheckboxGroup ).
</Doc>
<Preview src="./CheckboxGroupItems.svelte">
	<CheckboxGroupItems />
</Preview>
