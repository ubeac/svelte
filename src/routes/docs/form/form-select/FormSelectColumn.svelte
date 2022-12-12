<script>
	import { FormSelect, Col, Button, El } from '@ubeac/svelte'

	let items = ['Red', 'Green', 'Blue', 'Yellow', 'Cyan', 'Magenta', 'Black', 'White']
</script>

<El container>
	<El row>
		<FormSelect {items} label="First" />
		<FormSelect {items} label="Second" />

		<FormSelect {items} cols="6" label="Third" />
		<FormSelect {items} cols="6" label="Fourth" />
		<Col class="mt-3" offset="9" cols="3">
			<Button block color="primary">Submit</Button>
		</Col>
	</El>
</El>
