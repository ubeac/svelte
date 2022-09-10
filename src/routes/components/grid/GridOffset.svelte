<script>
	import { Container, Row, Col } from '@ubeac/svelte/components/gird'
	import { Card, CardBody } from '@ubeac/svelte/components/card'
</script>

<Container class="container-example">
	<Row class="row-example" noGutters>
		<Col md="4">
			<Card class="card-example">.col-md-4</Card>
		</Col>
		<Col md="4" offsetMd="4">
			<Card class="card-example">.col-md-4 .offset-md-4</Card>
		</Col>
	</Row>
	<Row class="row-example" noGutters>
		<Col md="3" offsetMd="3">
			<Card class="card-example">.col-md-3 .offset-md-3</Card>
		</Col>
		<Col md="3" offsetMd="3">
			<Card class="card-example">.col-md-3 .offset-md-3</Card>
		</Col>
	</Row>
	<Row class="row-example" noGutters>
		<Col md="6" offsetMd="3">
			<Card class="card-example">.col-md-6 .offset-md-3</Card>
		</Col>
	</Row>
</Container>
