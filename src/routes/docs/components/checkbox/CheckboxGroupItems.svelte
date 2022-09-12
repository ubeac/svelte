<script>
	import { CheckboxGroup } from '@ubeac/svelte'

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
	let group = []
</script>

<CheckboxGroup {items} bind:group text="name" key="value" />
