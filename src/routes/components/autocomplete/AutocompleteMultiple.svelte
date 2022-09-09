<script>
	import { Autocomplete } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = []
</script>

<Autocomplete multiple {items} bind:value />

<p if={value.length > 0}>You selected <b>{value.join(', ')}</b></p>
