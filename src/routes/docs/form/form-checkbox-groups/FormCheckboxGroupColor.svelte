<script lang="ts">
	import { FormCheckboxGroup } from '@ubeac/svelte'

	// define array to be bound to the CheckboxGroup
	let items = ['HTML', 'CSS', 'JavaScript', 'Svelte']

	// setting the selected value
	let value = [items[1]]
</script>

<FormCheckboxGroup label="Select Language" inline color="primary" {items} bind:value />
<FormCheckboxGroup label="Select Language" inline color="secondary" {items} bind:value />
<FormCheckboxGroup label="Select Language" inline color="success" {items} bind:value />
<FormCheckboxGroup label="Select Language" inline color="danger" {items} bind:value />

<i>value: {value}</i>
