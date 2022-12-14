<script lang="ts">
	import { RadioGroup } from '@ubeac/svelte'

	// define array to be bound to the RadioGroup
	let items = ['HTML', 'CSS', 'JavaScript', 'Svelte']

	// setting the selected value
	let value = items[1]
	let selectedIndex: number
</script>

<RadioGroup bind:value bind:selectedIndex {items} />
<i>You selected: {value}, index: {selectedIndex}</i>
