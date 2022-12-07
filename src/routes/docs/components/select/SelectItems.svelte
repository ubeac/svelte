<script>
	import { Select } from '@ubeac/svelte'

	let items = [
		{
			name: 'Apple',
			value: 'Apple',
		},
		{
			name: 'Orange',
			value: 'Orange',
		},
		{
			name: 'Peach',
			value: 'Peach',
		},
		{
			name: 'Banana',
			value: 'Banana',
		},
		{
			name: 'Apricot',
			value: 'Apricot',
		},
	]
	let value = ''
</script>

<Select bind:value {items} text="name" key="value" />
<span>{value}</span>