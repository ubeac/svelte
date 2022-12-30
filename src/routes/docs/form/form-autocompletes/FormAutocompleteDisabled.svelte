<script>
	import { FormAutocomplete } from '@ubeac/svelte'
	let items = ['Red', 'Green', 'Blue', 'Yellow', 'Cyan', 'Magenta', 'Black', 'White']
</script>

<FormAutocomplete disabled label="disabled" {items} placeholder="this field is disabled..." />
