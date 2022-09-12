<script>
	import { Container, Row, Col, Input, Label } from '@ubeac/svelte/components'
</script>

<Container>
	<Row>
		<Col>
			<Label required for="input-1">Required field</Label>
			<Input required id="input-1" />
		</Col>
		<Col>
			<Label for="input-1">Optional field</Label>
			<Input id="input-1" />
		</Col>
	</Row>
</Container>
