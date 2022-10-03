<script>
	import { FormInput, Container, Row, Col, Button } from '@ubeac/svelte'
</script>

<Container xs>
	<Row>
		<FormInput label="First Name:" cols="6" />
		<FormInput label="Last Name:" cols="6" />
		<FormInput label="Username:" cols="12" />
		<FormInput label="Email:" cols="12" />
		<FormInput label="Password" cols="6" />
		<FormInput label="Repeat Password" cols="6" />
		<Col class="mt-3" offset="9" cols="3">
			<Button block color="primary">Submit</Button>
		</Col>
	</Row>
</Container>
