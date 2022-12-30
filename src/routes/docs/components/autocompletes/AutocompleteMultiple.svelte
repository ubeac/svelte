<script lang="ts">
	import { Autocomplete } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any[] = []
</script>

<Autocomplete multiple {items} bind:value />
<i>You selected: {value.join(', ')}</i>
