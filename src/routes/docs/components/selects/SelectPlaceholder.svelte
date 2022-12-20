<script>
	import { Select, El } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ''
</script>

<Select bind:value {items} placeholder="Please select an item" />
<El>Selected value: {value}</El>
