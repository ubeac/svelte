<script>
	import { Container, Row, Col } from '$lib/components/gird'
	import { Card, CardBody } from '$lib/components/card'
</script>

<Container class="container-example">
	<Row noGutters>
		<Col cols="9">
			<Card class="card-example">Level 1: .col-sm-9</Card>
			<Row noGutters>
				<Col cols="8">
					<Card style="background-color: lightgrey;" class="card-example">Level 2: .col-8</Card>
				</Col>
				<Col cols="4">
					<Card style="background-color: lightgrey;" class="card-example">Level 2: .col-4</Card>
				</Col>
			</Row>
		</Col>
	</Row>
</Container>
