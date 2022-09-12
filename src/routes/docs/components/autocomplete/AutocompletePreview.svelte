<script>
	import { Autocomplete } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ['Apple', 'Orange']
</script>

<span>Default</span>
<Autocomplete multiple {items} bind:value />
<span>preview</span>
<Autocomplete preview multiple {items} bind:value />
