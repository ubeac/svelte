<script>
	import Preview from '@ubeac/svelte/components/preview/Preview.svelte'
	import CheckboxColor from './CheckboxColor.svelte'
	import CheckboxDefault from './CheckboxDefault.svelte'
	import CheckboxGroupDefault from './CheckboxGroupDefault.svelte'
	import CheckboxGroupInline from './CheckboxGroupInline.svelte'
	import CheckboxGroupItems from './CheckboxGroupItems.svelte'
	import FormCheckboxDefault from './FormCheckboxDefault.svelte'
	import FormCheckboxDescription from './FormCheckboxDescription.svelte'
	import FormCheckboxGroupDefault from './FormCheckboxGroupDefault.svelte'
</script>

<h1>Checkbox</h1>
<p>
	Use Checkbox if you want to allow users to select more than one option from a set of predefined options or to turn an
	option on or off.
</p>

<Preview src="./CheckboxDefault.svelte">
	<CheckboxDefault />
</Preview>

<h1>Checkbox Color</h1>
<p>Checkbox components such as ( Checkbox, FormCheckbox, CheckboxGroup, FormCheckboxGroup ) can have color.</p>

<Preview src="./CheckboxColor.svelte">
	<CheckboxColor />
</Preview>

<h1>Checkbox Group</h1>
<p>
	Use CheckboxGroup if you want to allow users to select more than one option from a set of predefined options or to
	turn an option on or off.
</p>

<Preview src="./CheckboxGroupDefault.svelte">
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

<h1>Form Checkbox</h1>
<p>
	Use FormCheckbox if you want to allow users to select more than one option from a set of predefined options or to turn
	an option on or off.
</p>

<Preview src="./FormCheckboxDefault.svelte">
	<FormCheckboxDefault />
</Preview>

<h1>Form Checkbox Description</h1>
<p>
	FormCheckbox can have description, to display the description below the checkbox and description can have custom
	color.
</p>

<Preview src="./FormCheckboxDescription.svelte">
	<FormCheckboxDescription />
</Preview>

<h1>Form Checkbox Group</h1>
<p>
	Use FormCheckboxGroup if you want to allow users to select more than one option from a set of predefined options or to
	turn an option on or off.
</p>

<Preview src="./FormCheckboxGroupDefault.svelte">
	<FormCheckboxGroupDefault />
</Preview>

<style>
	h1 {
		margin-top: 2rem;
	}
</style>
