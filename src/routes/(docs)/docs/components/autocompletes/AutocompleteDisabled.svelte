<script>
	import { Autocomplete } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ['Orange', 'Banana']
</script>

<span>Disabled:</span>
<Autocomplete disabled multiple {items} bind:value />

<i>You selected <b>{value.join(', ')}</b></i>

<span>Loading:</span>
<Autocomplete loading {items} />
