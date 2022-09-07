<script lang="ts">
	import { Checkbox, CheckboxGroup, FormCheckbox, FormCheckboxGroup } from '$lib/components'

	let items = [
		{ text: 'apple', key: 'apple', description: 'this is a description', descriptionColor: 'danger' },
		{ text: 'banana', key: 'banana', description: 'this is a description', descriptionColor: 'danger' },
		{ text: 'orange', key: 'orange', description: 'this is a description', descriptionColor: 'danger' },
		{ text: 'plum', key: 'plum', description: 'this is a description', descriptionColor: 'danger' },
	]
	let selection: any = []
	let selectionGroup: any = []
	let checkbox: boolean = false
	let form: boolean = false
</script>

<!-- ------------ -->

<h1>CheckboxGroup: {selection.join(', ')}</h1>
<CheckboxGroup {items} bind:group={selection} />

<!-- ------------ -->

<h1>Checkbox: {checkbox}</h1>
<Checkbox bind:checked={checkbox} label="checkbox" value={checkbox} />

<!-- ------------ -->

<h1>FormCheckbox: {form}</h1>
<FormCheckbox
	bind:checked={form}
	label="form checkbox"
	value={form}
	description="this is a description"
	descriptionColor="success" />

<!-- ------------ -->

<h1>FormCheckBox Group: {selectionGroup.join(', ')}</h1>
<FormCheckboxGroup {items} bind:group={selectionGroup} inline />
