<script>
	import { Autocomplete } from '@ubeac/svelte'

	let items = {
		first: 'First Item',
		second: 'Second Item',
		third: 'Third Item',
		fourth: 'Fourth Item',
		fifth: 'Fifth Item',
	}

	let value = ''
</script>

<Autocomplete {items} bind:value />

<p if={!!value}>You selected <b>{value}</b></p>
