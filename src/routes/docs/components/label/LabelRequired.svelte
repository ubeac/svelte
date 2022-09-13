<script>
	import { Container, Row, Col, Input, Label } from '@ubeac/svelte/components'
</script>

<Container>
	<Row>
		<Col>
			<Label required for="input-2">Required field</Label>
			<Input required id="input-2" />
		</Col>
		<Col>
			<Label for="input-3">Optional field</Label>
			<Input id="input-3" />
		</Col>
	</Row>
</Container>
