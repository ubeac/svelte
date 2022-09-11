<script>
	import { Container, Row, Col, Card, CardBody } from '@ubeac/svelte'
</script>

<Container class="container-example">
	<Row class="row-example" noGutters>
		<Col>
			<Card class="card-example">1 of 2</Card>
		</Col>
		<Col>
			<Card class="card-example">2 of 2</Card>
		</Col>
	</Row>
	<Row class="row-example" noGutters>
		<Col>
			<Card class="card-example">1 of 3</Card>
		</Col>
		<Col>
			<Card class="card-example">2 of 3</Card>
		</Col>
		<Col>
			<Card class="card-example">3 of 3</Card>
		</Col>
	</Row>
</Container>
