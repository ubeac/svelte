<script>
	import { FormSelect, Container, Row, Col, Button } from '@ubeac/svelte'

	let items=['Red', 'Green', 'Blue', 'Yellow', 'Cyan', 'Magenta', 'Black', 'White']
</script>

<Container xs>
	<Row>
		<FormSelect {items} label="First"/>
		<FormSelect {items} label="Second"/>

		<FormSelect {items} cols=6 label="Third"/>
		<FormSelect {items} cols=6 label="Fourth"/>
		<Col class="mt-3" offset="9" cols="3">
			<Button block color="primary">Submit</Button>
		</Col>
	</Row>
</Container>
