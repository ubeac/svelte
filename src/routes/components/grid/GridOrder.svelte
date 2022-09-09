<script>
	import { Container, Row, Col } from '$lib/components/gird'
	import { Card, CardBody } from '$lib/components/card'
</script>

<Container class="container-example">
	<Row class="row-example" noGutters>
		<Col>
			<Card class="card-example">First, but unordered</Card>
		</Col>
		<Col order="5">
			<Card class="card-example">Second, but last</Card>
		</Col>
		<Col order="1">
			<Card class="card-example">Third, but first</Card>
		</Col>
	</Row>
</Container>
<Container class="container-example">
	<Row class="row-example" noGutters>
		<Col order="last">
			<Card class="card-example">First, but last</Card>
		</Col>
		<Col>
			<Card class="card-example">Second, but unordered</Card>
		</Col>
		<Col order="first">
			<Card class="card-example">Third, but first</Card>
		</Col>
	</Row>
</Container>
