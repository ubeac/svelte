<script lang="ts">
	import { FormAutocomplete } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any[] = []
</script>

<FormAutocomplete multiple {items} bind:value />
<i>You selected: {value.join(', ')}</i>
