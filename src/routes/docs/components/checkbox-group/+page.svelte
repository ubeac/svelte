<script>
	import { Preview } from '@ubeac/svelte/components'
	import CheckboxGroupInline from './CheckboxGroupInline.svelte'
	import CheckboxGroupItems from './CheckboxGroupItems.svelte'
	import CheckboxGroupDefault from './CheckboxGroupDefault.svelte'
</script>

<h1>Checkbox Group</h1>
<p>
	Use CheckboxGroup if you want to allow users to select more than one option from a set of predefined options or to
	turn an option on or off.
</p>

<Preview vertical src="./CheckboxGroupDefault.svelte">
	<CheckboxGroupDefault />
</Preview>

<h1>Checkbox Group Inline</h1>
<p>CheckboxGroup can have inline property for all items to be in one horizontal line.</p>

<Preview src="./CheckboxGroupInline.svelte">
	<CheckboxGroupInline />
</Preview>

<h1>Checkbox Group Items</h1>
<p>
	CheckboxGroup items can have custom items property name, for convenience in displaying items in the checkbox, this
	feature is for other components like ( FormCheckboxGroup ).
</p>

<Preview src="./CheckboxGroupItems.svelte">
	<CheckboxGroupItems />
</Preview>
