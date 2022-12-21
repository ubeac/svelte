<script>
	import { FormHint, FormAutocomplete } from '@ubeac/svelte'

	let items = ['Red', 'Green', 'Blue', 'GHI', 'Cyan', 'DEF', 'Black', 'ABC']
</script>

<FormAutocomplete {items} label="First Color:">
	<FormHint slot="message">choose your favorite color</FormHint>
</FormAutocomplete>

<FormAutocomplete {items} label="invalid:" value="GHI">
	<FormHint state="invalid" slot="message">GHI is not a valid color name.</FormHint>
</FormAutocomplete>

<FormAutocomplete {items} label="valid:" value="black">
	<FormHint state="valid" slot="message">This color name is valid.</FormHint>
</FormAutocomplete>
