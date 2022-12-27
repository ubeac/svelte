<script>
	import { Autocomplete } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = []
</script>

<Autocomplete multiple {items} bind:value />

<i>You selected <b>{value.join(', ')}</b></i>
