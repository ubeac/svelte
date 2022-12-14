<script lang="ts">
	import { RadioGroup } from '@ubeac/svelte'

	// define array to be bound to the RadioGroup
	let items = ['HTML', 'CSS', 'JavaScript', 'Svelte']

	// setting the selected value
	let value = items[1]
</script>

<RadioGroup bind:value {items} label={(item, index) => index.toString() + '-' + item} />

<i>You selected: {value}</i>
