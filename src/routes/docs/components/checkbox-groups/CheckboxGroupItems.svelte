<script lang="ts">
	import { CheckboxGroup } from '@ubeac/svelte'

	let items = [
		{
			name: 'Apple',
			value: 'a',
		},
		{
			name: 'Orange',
			value: 'o',
		},
		{
			name: 'Peach',
			value: 'p',
		},
		{
			name: 'Banana',
			value: 'b',
		},
		{
			name: 'Apricot',
			value: 'ap',
		},
	]
	let value: string[] = []
</script>

<CheckboxGroup {items} bind:value let:item let:index>
	{index}- <b>{item.name}</b> ({item.value})
</CheckboxGroup>

<span>{JSON.stringify(value)}</span>
