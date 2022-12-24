<script>
	import { Autocomplete } from '@ubeac/svelte'

	let items = [
		{ id: 'first', value: 'First Item' },
		{ id: 'second', value: 'Second Item' },
		{ id: 'third', value: 'Third Item' },
		{ id: 'fourth', value: 'Fourth Item' },
		{ id: 'fifth', value: 'Fifth Item' },
	]

	let value = ''
</script>

<Autocomplete {items} key="id" text="value" bind:value />

<p if={!!value}>You selected <b>{value}</b></p>
