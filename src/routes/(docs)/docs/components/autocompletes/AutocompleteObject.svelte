<script>
	import { Autocomplete } from '@ubeac/svelte'

	let items = [
		{ id: 'first', value: 'First Item' },
		{ id: 'second', value: 'Second Item' },
		{ id: 'third', value: 'Third Item' },
		{ id: 'fourth', value: 'Fourth Item' },
		{ id: 'fifth', value: 'Fifth Item' },
	]

	let value
</script>

<Autocomplete {items} itemKey="id" itemValue="value" bind:value />
<i>value: {JSON.stringify(value)}</i>
