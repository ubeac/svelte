<script lang="ts">
	import { Select } from '@ubeac/svelte'

	let items = [
		{
			name: 'Apple',
			value: '1',
		},
		{
			name: 'Orange',
			value: '2',
		},
		{
			name: 'Peach',
			value: '3',
		},
		{
			name: 'Banana',
			value: '4',
		},
		{
			name: 'Apricot',
			value: '5',
		},
	]
	let value: any = undefined
</script>

<Select bind:value {items} let:item let:index>{item.value} - {item.name}</Select>

<i>value: {JSON.stringify(value)}</i>
