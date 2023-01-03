<script>
	import { FormAutocomplete } from '@ubeac/svelte'
	let items = ['Red', 'Green', 'Blue', 'Yellow', 'Cyan', 'Magenta', 'Black', 'White']
</script>

<FormAutocomplete {items} required label="First Color" />
<FormAutocomplete {items} label="Last Color" />
