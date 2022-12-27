<script>
	import { FormAutocomplete, Button, El } from '@ubeac/svelte'

	let items = ['Red', 'Green', 'Blue', 'Yellow', 'Cyan', 'Magenta', 'Black', 'White']
</script>

<El container>
	<El row>
		<FormAutocomplete {items} label="First" />
		<FormAutocomplete {items} label="Second" />

		<FormAutocomplete {items} cols="6" label="Third" />
		<FormAutocomplete {items} cols="6" label="Fourth" />
		<El class="mt-3" offset="9" col="3">
			<Button color="primary">Submit</Button>
		</El>
	</El>
</El>
