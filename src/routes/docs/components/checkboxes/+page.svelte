<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import CheckboxColor from './CheckboxColor.svelte'
	import CheckboxDefault from './CheckboxDefault.svelte'
	import CheckboxDescription from './CheckboxDescription.svelte'
</script>

<h1>Checkbox</h1>
<p>
	Use Checkbox if you want to allow users to select more than one option from a set of predefined options or to turn an
	option on or off.
</p>

<Doc title="Basic">Basic Usage</Doc>
<Preview src="./CheckboxDefault.svelte">
	<CheckboxDefault />
</Preview>

<Doc title="Checkbox Color">
	Checkbox components such as ( Checkbox, FormCheckbox, CheckboxGroup, FormCheckboxGroup ) can have color.
</Doc>
<Preview src="./CheckboxColor.svelte">
	<CheckboxColor />
</Preview>

<Doc title="Description">
	Checkbox can have description, to display the description below the checkbox. description can have custom color.
</Doc>
<Preview src="./CheckboxDescription.svelte">
	<CheckboxDescription />
</Preview>
