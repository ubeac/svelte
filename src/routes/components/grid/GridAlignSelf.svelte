<script>
	import { Container, Row, Col } from '$lib/components/gird'
	import { Card, CardBody } from '$lib/components/card'
</script>

<Container class="container-example">
	<Row class="row-example" noGutters>
		{#each ['start', 'center', 'end'] as align}
			<Col alignSelf={align}>
				<Card class="card-example">One of three columns</Card>
			</Col>
		{/each}
	</Row>
</Container>
