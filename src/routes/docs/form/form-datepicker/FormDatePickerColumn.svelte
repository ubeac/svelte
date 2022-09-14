<script>
	import { FormDatePicker, Container, Row, Col, Button } from '@ubeac/svelte'
</script>

<Container xs>
	<Row>
		<FormDatePicker label="Birth Date" />
		<FormDatePicker label="Graduation Date" />

		<FormDatePicker cols="6" label="Start Date" />
		<FormDatePicker cols="6" label="End Date" />
		<Col class="mt-3" offset="9" cols="3">
			<Button block color="primary">Submit</Button>
		</Col>
	</Row>
</Container>
