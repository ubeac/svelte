<script>
	import { Preview } from '@ubeac/svelte'
	import CheckboxColor from './CheckboxColor.svelte'
	import CheckboxDefault from './CheckboxDefault.svelte'
	import CheckboxDescription from './CheckboxDescription.svelte'
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

<h1>Description</h1>
<p>Checkbox can have description, to display the description below the checkbox. description can have custom color.</p>

<Preview src="./CheckboxDescription.svelte">
	<CheckboxDescription />
</Preview>
