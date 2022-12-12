<script>
	import { Select } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ''
</script>

<Select bind:value {items} placeholder="this is placeholder" />
<span>{value}</span>
