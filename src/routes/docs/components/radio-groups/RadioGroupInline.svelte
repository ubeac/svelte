<script>
	import { RadioGroup } from '@ubeac/svelte'
	// define array to be bound to the RadioGroup
	let items = ['HTML', 'CSS', 'JavaScript', 'Svelte']

	// setting the selected value
	let value = items[1]
</script>

<RadioGroup inline {items} bind:value />

<i>value: {value}</i>
