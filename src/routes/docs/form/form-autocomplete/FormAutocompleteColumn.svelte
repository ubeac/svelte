<script>
	import { FormAutocomplete, Col, Button, El } from '@ubeac/svelte'

	let items = ['Red', 'Green', 'Blue', 'Yellow', 'Cyan', 'Magenta', 'Black', 'White']
</script>

<El container>
	<El row>
		<FormAutocomplete {items} label="First" />
		<FormAutocomplete {items} label="Second" />

		<FormAutocomplete {items} cols="6" label="Third" />
		<FormAutocomplete {items} cols="6" label="Fourth" />
		<Col class="mt-3" offset="9" cols="3">
			<Button block color="primary">Submit</Button>
		</Col>
	</El>
</El>
