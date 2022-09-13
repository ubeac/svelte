<script>
	import { Autocomplete } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ''
</script>

<Autocomplete {items} bind:value />

<p if={!!value}>You selected <b>{value}</b></p>
