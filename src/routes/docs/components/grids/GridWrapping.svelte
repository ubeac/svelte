<script>
	import { Container, Row, Col } from '@ubeac/svelte/components/grid'
	import { Card, CardBody } from '@ubeac/svelte/components/card'
</script>

<Container class="container-example">
	<Row noGutters>
		<Col cols="9">
			<Card class="card-example">.col-9</Card>
		</Col>
		<Col cols="4">
			<Card class="card-example">
				.col-4<br />Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous
				unit.
			</Card>
		</Col>
		<Col cols="6">
			<Card class="card-example">.col-6<br />Subsequent columns continue along the new line.</Card>
		</Col>
	</Row>
</Container>
