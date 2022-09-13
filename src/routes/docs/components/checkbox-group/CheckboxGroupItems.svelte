<script lang="ts">
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
	let value: string[] = []
</script>

<CheckboxGroup {items} bind:value text="name" key="value" />

<span>{value}</span>
