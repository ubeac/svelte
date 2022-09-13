<script>
	import { FormAutocomplete } from '@ubeac/svelte'
	let items=['Red', 'Green', 'Blue', 'Yellow', 'Cyan', 'Magenta', 'Black', 'White']
</script>

<FormAutocomplete readOnly label="readonly" {items} value="a" />
<FormAutocomplete disabled label="disabled" {items} />
<FormAutocomplete loading label="loading" {items} placeholder="please wait a minute..." />
