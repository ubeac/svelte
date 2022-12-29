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

<i>You selected <b>{value}</b></i>
