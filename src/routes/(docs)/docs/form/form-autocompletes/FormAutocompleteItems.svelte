<script lang="ts">
	import { FormAutocomplete } from '@ubeac/svelte'

	let items = [
		{
			key: '1',
			value: 'Apple',
		},
		{
			key: '2',
			value: 'Orange',
		},
		{
			key: '3',
			value: 'Peach',
		},
		{
			key: '4',
			value: 'Banana',
		},
		{
			key: '5',
			value: 'Apricot',
		},
	]
	let value: any = undefined
</script>

<FormAutocomplete label="Label" bind:value {items} let:item let:index>{item.value} - {item.name}</FormAutocomplete>

<i>value: {JSON.stringify(value)}</i>
