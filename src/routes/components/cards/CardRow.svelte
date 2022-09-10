<script>
	import { Card, CardBody, CardHeader, CardTitle } from '@ubeac/svelte/components/card'
	import { Row, Col } from '@ubeac/svelte/components/gird'
</script>

<Row class="row-deck">
	<Col cols="4">
		<Card>
			<CardBody>Short content</CardBody>
		</Card>
	</Col>
	<Col cols="4">
		<Card>
			<CardBody>Extra long content of card. Lorem ipsum dolor sit amet, consetetur sadipscing elitr</CardBody>
		</Card>
	</Col>
	<Col cols="4">
		<Card>
			<CardBody>Short content</CardBody>
		</Card>
	</Col>
</Row>
